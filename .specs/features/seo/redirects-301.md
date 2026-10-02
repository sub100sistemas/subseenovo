# Mapa de redirects 301 — troca do site antigo pelo novo (`https://subsee.com.br`)

Documento de referência. A configuração dos redirects é feita na hospedagem e não faz parte do código do site.

Domínio oficial: `https://subsee.com.br/` (HTTPS, sem `www`). O site antigo já redireciona `http://` para `https://` e `www.` para o domínio sem `www`.

Padrão de URL do novo site: barra final (`/pasta/`).

## Redirects definidos

| URL antiga | URL nova |
|---|---|
| `/planos-precos/` | `/planos-e-precos/` |
| `/quero-uma-demonstracao/` | `/agendar-demonstracao/` |
| `/teste-gratis` e `/teste-gratis/` | `/testar-gratis/` |
| `/crm-imobiliario/imoveis-venda/` | `/modulos/crm-imobiliario-urbano/` |
| `/crm-imobiliario/imoveis-locacao/` | `/modulos/crm-imobiliario-urbano/` |
| `/crm-imobiliario/imoveis-lancamentos/` | `/modulos/crm-imobiliario-urbano/` |
| `/crm-imobiliario/imoveis-rurais/` | `/modulos/crm-imobiliario-rural/` |
| `/crm-imobiliario/imoveis-temporada/` | `/modulos/crm-imobiliario-temporada/` |
| `/crm-imobiliario/sites-hotsites/` | `/modulos/site-para-imobiliarias-urbanas/` |
| `/lgpd/` | `/lgpd/termos-de-uso/` |
| `/conteudo/termos-de-uso/` | `/lgpd/termos-de-uso/` |
| `/conteudo/politica-de-privacidade/` | `/lgpd/politica-de-privacidade/` |

## URLs iguais (sem redirect)

| URL |
|---|
| `/` |
| `/lgpd/termos-de-uso/` |
| `/lgpd/politica-de-privacidade/` |

## Pendentes de decisão

| URL antiga | Situação | Sugestão |
|---|---|---|
| `/crm-imobiliario/portais-imobiliarios/` | Sem página equivalente exata | `/modulos/crm-imobiliario-urbano/` ou `/modulos/apis-hub-integrador/` |
| `/crm-imobiliario/melhor-localizacao/` | Sem página equivalente | `/modulos/crm/` |
| `/crm-imobiliario/minhas-conexoes/` | Sem página equivalente | `/modulos/crm/` |
| `/solicite-um-orcamento/` | Sem página equivalente | `/agendar-demonstracao/` |
| `/sistema/`, `/conteudo/`, `/es/`, `/en/` | Seções que não existem no novo site | Decidir entre `/`, 404 ou 410 |

## Observações

- Os redirects devem ser permanentes (301) e apontar direto para o destino final, sem cadeia de redirects.
- O `sitemap.xml` do site antigo é substituído pelo do novo site (gerado no build, URLs com barra final).
- O `robots.txt` antigo bloqueava `/teste-gratis`, `/conteudo/`, `/sistema/`, `/es/` e `/en/`. O novo `robots.txt` libera o site inteiro e controla a indexação por página.
- `/inscreva-se/` é a única página do novo site com `noindex, follow`, fora do sitemap.
