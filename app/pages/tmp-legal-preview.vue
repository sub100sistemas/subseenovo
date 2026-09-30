<script setup lang="ts">
import type { LegalSection } from '~/data/lgpd-types'

const sections: LegalSection[] = [
  {
    id: 'menores',
    title: '1. RESTRIÇÃO PARA MENORES',
    paragraphs: [
      {
        lines: [
          'Os sites da SUB100 foram desenvolvidos para usuários maiores de idade. Recomendamos que crianças e pessoas menores de 18 (dezoito) anos somente utilizem o site acompanhadas dos seus pais ou responsável legal.'
        ]
      }
    ]
  },
  {
    id: 'usuarios',
    title: '3. USUÁRIOS E ANUNCIANTES',
    subsections: [
      {
        label: '3.1. COLETA DE INFORMAÇÕES',
        paragraphs: [
          { lines: ['a) A SUB100 poderá coletar as seguintes informações pessoais, via formulários dos sites: Empresa; CNPJ; Nome; CPF; Email; Telefone; Endereço; Perfil.'] },
          { lines: ['b) Dados fornecidos pela utilização dos sites SUB100: Dados gerais como IP e sistema operacionais; Dados da localização do usuário/anunciante; Dados de interação entre usuários e entre usuários e anunciantes; Dados sobre como o usuário/anunciante utiliza e interage com os serviços.'] }
        ]
      },
      {
        label: '3.2. OS DADOS USUÁRIOS',
        paragraphs: [{ lines: ['Os dados coletados acima serão utilizados pela SUB100 para processar e facilitar a interação do usuário nos sites da empresa e também, para melhorias dos serviços disponibilizados.'] }]
      }
    ]
  },
  {
    id: 'lista',
    title: 'TESTE DE LISTA',
    paragraphs: [{ lines: ['linha um:', '(I) item um;', '(II) item dois;'] }, { lines: ['https://www.sub100sistemas.com.br/https://sub100.com.br/www.sistemasgl.com.br'] }]
  }
]
</script>

<template>
  <main class="bg-[#f5f5f5] py-10">
    <LegalSections :sections="sections" />
  </main>
</template>
