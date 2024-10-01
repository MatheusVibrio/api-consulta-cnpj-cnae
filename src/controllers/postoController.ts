import { Request, Response, NextFunction } from 'express';
import { buscarCNPJ } from '../services/cnpjService'; // Supondo que você tenha essa função implementada
import { validarPostoCombustivel } from '../utils/cnaeValidator'; // A função de validação que ajustamos

export const validarPosto = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
    const { cnpj } = req.params;

    try {
        // Buscar dados do CNPJ usando a função implementada
        const dadosCNPJ = await buscarCNPJ(cnpj);

        if (!dadosCNPJ) {
            // Retorna erro se não encontrar dados do CNPJ
            return res.status(400).json({ error: 'CNPJ inválido ou não encontrado' });
        }

        // Extrair CNAEs
        const cnaes = [
            // Certifique-se de que "code" existe e é um string
            dadosCNPJ.atividade_principal[0]?.code || '',
            ...dadosCNPJ.atividades_secundarias.map((atividade: any) => atividade.code || '')
        ].filter(cnae => cnae); // Remove quaisquer entradas vazias

        // Verifica se algum dos CNAEs corresponde a um posto de combustíveis
        const ehPostoCombustivel = validarPostoCombustivel(cnaes);

        // Retornando a resposta JSON
        return res.json({
            cnpj: dadosCNPJ.cnpj,
            cnaes: cnaes,
            ehPostoCombustivel: ehPostoCombustivel
        });
    } catch (error) {
        // Passa o erro para o próximo middleware de tratamento de erros
        next(error);
    }
};
