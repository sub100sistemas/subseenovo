import type { LegalSection } from '~/data/lgpd-types'

export const lgpdTermosSections: LegalSection[] = [
  {
    id: 'boas-vindas',
    title: 'BOAS-VINDAS',
    bodyClass: 'w-full text-[16px] leading-[1.7] text-[#4b5563] [overflow-wrap:anywhere] tablet-lg:leading-[27px]',
    paragraphs: [
      {
        lines: [
          'O acesso ao conteúdo deste site dependerá de sua prévia e expressa concordância com os Termos de Uso e a Política de Privacidade.'
        ]
      },
      {
        lines: [
          'Os Termos de Uso apresentam as "Condições Gerais" aplicáveis ao uso dos sites disponibilizados pela empresa SUB100 SISTEMAS LTDA, pessoa jurídica de direito privado, devidamente inscrita no CNPJ/MF: 11.528.518/0001-19 com endereço à Rua Machado de Assis, 621, Zona 06 - CEP 87015-580 - Maringá - PR, doravante denominada SUB100.'
        ]
      }
    ]
  },
  {
    id: 'definicoes',
    title: 'DEFINIÇÕES',
    subsections: [
      {
        label: 'USUÁRIO',
        paragraphs: [
          {
            lines: [
              'são todas as pessoas que acessam os sites da SUB100 SISTEMAS LTDA, independentemente de se cadastrarem e receberem uma identificação individual e exclusiva, ou não.'
            ]
          }
        ]
      },
      {
        label: 'ANUNCIANTE',
        paragraphs: [
          {
            lines: [
              'são todas as pessoas e empresas que possuem CRECI e se cadastram no site do Portal de Imóveis da SUB100 SISTEMAS LTDA para realizarem o anúncio de imóveis.'
            ]
          }
        ]
      },
      {
        label: 'VOCÊ',
        paragraphs: [
          {
            lines: ['são os usuários ou anunciantes, dependendo do contexto em que esta definição é utilizada.']
          }
        ]
      },
      {
        label: 'SUB100 SISTEMAS LTDA',
        paragraphs: [
          {
            lines: [
              '“SUB100”, empresa proprietária e responsável pelos sites: https://www.sub100sistemas.com.br/, https://sub100.com.br/, www.sistemasgl.com.br, https://subsee.com.br/, que se destinam a divulgação de seus produtos para fins de comercialização e/ou aproximação de anunciantes e usuários, visando facilitar a busca por imóveis para compra, venda e locação e, pelos produtos: Portal de Imóveis SUB100, SUBSEE on, Sistema SGL, Sites & Hotsites e Inteligência imobiliária.'
            ]
          }
        ]
      },
      {
        label: 'PORTAL DE IMÓVEIS SUB100',
        paragraphs: [
          {
            lines: [
              '“Portal SUB100”, site onde são exibidas uma ampla variedade de opções de imóveis disponíveis para Venda e/ou Locação, cadastrados pelos anunciantes, ou seja, funciona como um catálogo virtual onde anunciantes podem listar e promover suas propriedades disponíveis para usuários interessados na Venda e/ou Locação de imóveis.'
            ]
          }
        ]
      },
      {
        label: 'SUBSEE ON',
        paragraphs: [
          {
            lines: [
              'gerenciador de propriedades, onde corretores e imobiliárias podem realizar a gestão eficiente de seus imóveis, com integração ao Portal SUB100 e outros portais.'
            ]
          }
        ]
      },
      {
        label: 'SISTEMA SGL',
        paragraphs: [
          {
            lines: [
              '“SGL”, Sistema de Gestão de Loteamentos, ERP desenvolvido para atender todas as áreas de administração do empreendimento, desde o primeiro atendimento até o último recebível, com módulos de controle de atendimento, simulador de vendas, mapa interativo, portal do cliente e controle e administração financeira, contábil e fiscal.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'responsabilidades',
    title: 'RESPONSABILIDADES',
    paragraphs: [
      {
        lines: [
          'O usuário e o anunciante, ao preencher formulários de contato e/ou de cadastro, solicitações de demonstrações e/ou contato via WhatsApp, disponibilizados nos sites da SUB100, reconhecem que deverão inserir dados legítimos e autorizam a SUB100 a utilizar os dados para fins de viabilizar a interação entre o usuário/anunciante e a SUB100 e viabilizar a prestação de serviços.'
        ]
      },
      {
        lines: [
          'Ainda, mesmo sendo a SUB100 proprietária do produto Portal SUB100, a empresa não é proprietária dos imóveis oferecidos pelos anunciantes. O usuário reconhece que antes de realizar qualquer visita em eventuais imóveis, deverá previamente entrar em contato com o anunciante e ao realizar negociações com eles, o faz por sua conta e risco, isentando a SUB100 de qualquer responsabilidade.'
        ]
      },
      {
        lines: [
          'Já, o anunciante do Portal SUB100, declara que utilizará o mesmo com o propósito apenas de divulgar imóveis (para lançamentos, venda, locação e/ou temporada), sendo vedado realizar qualquer outro tipo de serviço. Também garante que disponibilizará informações fidedignas, sendo responsabilizado caso as informações disponibilizadas tenham sido realizadas de forma equivocada. Caso a inconsistência acima seja comunicada à SUB100, o anunciante reconhece que a empresa poderá realizar a exclusão do anúncio.'
        ]
      },
      {
        lines: [
          'Nesse sentido, a SUB100 é responsável pelo bom funcionamento dos seus sites, mas não garante que todos os anúncios oferecidos no Portal SUB100 estejam conforme as especificações, uma vez que essas informações são disponibilizadas pelos anunciantes. Além disso, a empresa não assume garantia de nenhuma espécie quanto ao uso por terceiros de quaisquer comentários disponibilizados pelos anunciantes.'
        ]
      }
    ]
  },
  {
    id: 'cadastro',
    title: 'CADASTRO',
    paragraphs: [
      {
        lines: [
          'O usuário poderá realizar o cadastro nos sites da SUB100 quando houver interesse da sua parte para:',
          '(I) solicitar contato telefônico ou via WhatsApp;',
          '(II) solicitar demonstração dos produtos da SUB100;',
          '(III) trabalhar com a SUB100;',
          '(IV) receber conteúdos exclusivos sobre temas como inovação tecnológica, novidades dos produtos, mercado, feiras e eventos, ofertas especiais e atualização das políticas SUB100.',
          'No site do Portal SUB100, o usuário poderá realizar o cadastro no site quando houver interesse da sua parte para:',
          '(I) salvar imóveis favoritos;',
          '(II) emitir propostas aos anunciantes;',
          '(III) solicitar visita ao imóvel com agendamento;',
          '(IV) programar e receber alerta de interesses por imóveis específicos;',
          '(V) solicitar que algum anunciante procure um imóvel específico que não existe no portal;',
          '(VI) acessar informações sobre seus imóveis;',
          '(VII) enviar um imóvel para ser divulgado por algum anunciante.',
          '',
          'O anunciante deverá se cadastrar nos seguintes casos:',
          '(I) possuir interesse na divulgação de imóveis para Lançamentos, Venda, Locação e Temporada;',
          '(II) usar ferramentas do site para intermediação com o usuário.',
          'Todos os dados serão tratados segundo a Política de Privacidade e poderão ser disponibilizados a SUB100 (e aos anunciantes, quando solicitado pelo usuário) para eventuais contatos.'
        ]
      }
    ]
  },
  {
    id: 'uso-do-site',
    title: 'USO DO SITE',
    paragraphs: [
      {
        lines: [
          'A SUB100 não garante o funcionamento dos seus sites 24 horas por dia, em virtude de eventuais quedas de energia e problemas semelhantes, comprometendo-se, no entanto, a envidar os melhores esforços no sentido de tomar todas as medidas necessárias para contatar as empresas prestadoras de serviço a fim de minimizar os transtornos.'
        ]
      },
      {
        lines: [
          'Também, a SUB100 compromete-se em aprimorar o uso e a navegação do site, razão pela qual poderá solicitar e coletar informações e dados sobre a sua experiência de navegação. Os dados coletados serão utilizados para processar e facilitar a sua interação no site e poderão permanecer armazenados em nossos sistemas.'
        ]
      },
      {
        lines: [
          'Os sites da SUB100 poderão armazenar cookies, que consistem em tecnologias coletadas automaticamente. Esses dados poderão ser utilizados para identificar preferências no site, melhorias na navegação e gerar relatórios para envio aos anunciantes.'
        ]
      }
    ]
  },
  {
    id: 'armazenamento-e-seguranca',
    title: 'ARMAZENAMENTO E SEGURANÇA',
    paragraphs: [
      {
        lines: [
          'Todos os dados pessoais informados pelos usuários serão armazenados na base de dados da SUB100, sob rígidas práticas de segurança de informação, e conservados em seu cadastro ativo até eventual pedido de exclusão.'
        ]
      },
      {
        lines: [
          'Segundo a legislação vigente, o usuário poderá solicitar a eliminação dos dados vigentes, ou então solicitar a alteração do cadastro e ainda retirar o seu consentimento, especificando qual consentimento pretende retirar.'
        ]
      },
      {
        lines: [
          'A SUB100 poderá acessar e manter os dados pessoais dos usuários mesmo após pedido de exclusão, caso seja necessário para cumprimento de obrigações legais.'
        ]
      }
    ]
  },
  {
    id: 'consentimento',
    title: 'CONSENTIMENTO',
    paragraphs: [
      {
        lines: [
          'O usuário reconhece e aceita todos os termos e condições de uso. A SUB100 poderá alterar tais termos e condições a qualquer momento, e as eventuais modificações realizadas entrarão em vigor imediatamente.'
        ]
      },
      {
        lines: [
          'A SUB100 orienta o usuário a, na hipótese de não concordância com o presente documento e a Política de Privacidade, não utilizar os serviços oferecidos pela SUB100 em seus sites.'
        ]
      }
    ]
  },
  {
    id: 'canal-de-duvidas',
    title: 'CANAL DE DÚVIDAS',
    paragraphs: [
      {
        lines: [
          'Caso tenha qualquer dúvida em relação aos Termos de Uso e a Política de Privacidade, favor entrar em contato: privacidade@sub100.com.br.'
        ]
      }
    ]
  },
  {
    id: 'foro',
    title: 'FORO',
    paragraphs: [
      {
        lines: [
          'Fica eleito o Foro Central da Comarca de Maringá - PR para dirimir quaisquer questões decorrentes destes Termos de Uso, que serão regidos pelas leis brasileiras.'
        ]
      }
    ]
  }
]
