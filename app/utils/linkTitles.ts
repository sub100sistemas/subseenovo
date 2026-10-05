const internalTitles: Record<string, string> = {
  '/': 'Página inicial',
  '/eventos/': 'Eventos online do SUBSEE on',
  '/planos-e-precos/': 'Planos e preços do SUBSEE',
  '/testar-gratis/': 'Teste grátis do SUBSEE por 30 dias',
  '/agendar-demonstracao/': 'Agendar demonstração do SUBSEE',
  '/inscreva-se/': 'Inscrição no evento online do SUBSEE',
  '/assista-os-videos-do-subsee-on/': 'Vídeos do SUBSEE on',
  '/modulos/crm/': 'CRM imobiliário',
  '/modulos/crm-imobiliario-urbano/': 'CRM imobiliário urbano',
  '/modulos/crm-imobiliario-rural/': 'CRM imobiliário rural',
  '/modulos/crm-imobiliario-temporada/': 'CRM para imóveis de temporada',
  '/modulos/site-para-imobiliarias-urbanas/': 'Site para imobiliárias urbanas',
  '/modulos/site-para-imobiliarias-rurais/': 'Site para imobiliárias rurais',
  '/modulos/site-para-loteadoras/': 'Site para loteadoras',
  '/modulos/apis-hub-integrador/': 'APIs e HUB integrador',
  '/modulos/base-de-conhecimento/': 'Base de conhecimento do SUBSEE on',
  '/lgpd/termos-de-uso/': 'Termos de uso',
  '/lgpd/politica-de-privacidade/': 'Política de privacidade',
  '#opcionais': 'Ver os opcionais dos planos'
}

const externalTitles: Array<[string, string]> = [
  ['https://blog.sub100sistemas.com.br/2024/07/como-escolher-um-corretor', 'Artigo: como escolher um corretor de imóveis de confiança'],
  ['https://blog.sub100sistemas.com.br/2024/07/subsee-on-para-corretores', 'Artigo: SUBSEE on para corretores de imóveis rurais'],
  ['https://blog.sub100sistemas.com.br/2024/07/descubra-porto-rico', 'Artigo: Porto Rico (PR) no Rio Paraná'],
  ['https://blog.sub100sistemas.com.br', 'Blog da SUB100'],
  ['https://app.subsee.com.br/treinamentos/eventos-online', 'Eventos online no app SUBSEE'],
  ['https://app.subsee.com.br', 'Acessar o app SUBSEE'],
  ['https://sub100.com.br', 'Portal de imóveis SUB100'],
  ['https://sub100sistemas.com.br', 'Site da SUB100 Sistemas'],
  ['https://sistemasgl.com.br', 'Sistema SGL para loteadoras'],
  ['https://www.youtube.com/@subsee', 'Canal do SUBSEE no YouTube'],
  ['https://www.facebook.com/sub100brasil', 'Facebook da SUB100'],
  ['https://www.instagram.com/sub100brasil', 'Instagram da SUB100'],
  ['https://www.linkedin.com/company/sub100', 'LinkedIn da SUB100'],
  ['https://www.google.com/maps', 'Como chegar à SUB100 no Google Maps'],
  ['tel:+554430325200', 'Ligar para o comercial da SUB100']
]

export function titleForLink(href?: string | null): string | undefined {
  if (!href) {
    return undefined
  }
  const [path] = href.split('?')
  const internal = internalTitles[path] ?? internalTitles[path.endsWith('/') ? path : `${path}/`]
  if (internal) {
    return internal
  }
  return externalTitles.find(([prefix]) => href.startsWith(prefix))?.[1]
}
