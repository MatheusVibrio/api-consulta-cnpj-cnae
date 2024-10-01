# API para Validação de Postos de Combustível

Esta API permite consultar o CNAE (Classificação Nacional de Atividades Econômicas) de um estabelecimento a partir de seu CNPJ (Cadastro Nacional da Pessoa Jurídica). O objetivo principal é verificar se o CNPJ informado pertence a um posto de combustíveis.

## Funcionalidades

- **Consulta por CNPJ**: Realiza uma requisição para obter os dados do estabelecimento associado ao CNPJ fornecido.
- **Validação de CNAE**: Verifica se algum dos CNAEs retornados está na lista pré-definida de CNAEs que identificam atividades relacionadas a postos de combustíveis.
- **Resposta Estruturada**: Retorna informações detalhadas, incluindo o CNPJ, a lista de CNAEs associados e um indicador booleano (`ehPostoCombustivel`) que indica se o estabelecimento é, de fato, um posto de combustíveis.

## Endpoint

### `GET /validar-posto/:cnpj`

### Parâmetros

- `cnpj`: O CNPJ do estabelecimento a ser consultado.

## Exemplo de Resposta

```json
{
    "cnpj": "00.558.799/0001-36",
    "cnaes": [
        "47.31-8-00",
        "45.20-0-05",
        "45.30-7-03"
    ],
    "ehPostoCombustivel": true
}
