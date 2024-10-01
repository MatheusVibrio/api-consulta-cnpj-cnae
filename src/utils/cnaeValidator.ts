// Lista de CNAEs que indicam postos de combustíveis
const CNAES_POSTO_COMBUSTIVEL = [
    "4731-8/00", // Comércio de combustíveis para veículos
    "4731-8/01", // Comércio de combustíveis para veículos - Lojas de conveniência
    "4731-8/02", // Comércio de combustíveis para veículos - Revenda de óleo diesel
    "4732-6/00", // Comércio de combustíveis para veículos - Revenda de gás liquefeito de petróleo (GLP)
    "47.31-8-00", // Comércio de combustíveis para veículos (formato com pontos)
    "47.31-8-01", // Comércio de combustíveis para veículos - Lojas de conveniência (formato com pontos)
    "47.31-8-02", // Comércio de combustíveis para veículos - Revenda de óleo diesel (formato com pontos)
    "47.32-6-00", // Comércio de combustíveis para veículos - Revenda de gás liquefeito de petróleo (GLP) (formato com pontos)
];

// Função para normalizar o CNAE 
const normalizarCNAE = (cnae: string): string => {
    return cnae.replace(/[.\-\/]/g, ""); // Remove pontos, traços e barras
};

// Função para validar se o CNAE é de um posto de combustível
export const validarPostoCombustivel = (cnaes: string[]): boolean => {
    return cnaes.some(cnae => 
        CNAES_POSTO_COMBUSTIVEL.includes(cnae) || 
        CNAES_POSTO_COMBUSTIVEL.includes(normalizarCNAE(cnae))
    );
};
