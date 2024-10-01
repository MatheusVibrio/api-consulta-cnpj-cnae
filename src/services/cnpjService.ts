import axios from 'axios';

export const buscarCNPJ = async (cnpj: string) => {
    try {
        const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados do CNPJ:', error);
        return null;
    }
};
