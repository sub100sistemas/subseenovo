<script setup lang="ts">
interface OpcionalRow {
  label: string
  precoUrbano: string
  precoRural: string
}

const opcionais: OpcionalRow[] = [
  { label: '5 usuários adicionais', precoUrbano: 'R$ 100,00', precoRural: 'R$ 100,00' },
  { label: 'Site & Hotsite Padrão', precoUrbano: 'R$ 1.200,00', precoRural: 'R$ 1.200,00' },
  { label: 'Site & Hotsite personalizado', precoUrbano: 'Consulte', precoRural: 'Consulte' }
]
</script>

<template>
  <section class="section-py">
    <div class="container-page overflow-x-auto">
      <div class="mx-auto min-w-[560px] max-w-[1085px] rounded-2xl border-2 border-brand">
        <div class="grid grid-cols-[1fr_180px_180px] items-center gap-4 border-b border-ink/10 px-6 py-4 tablet-lg:grid-cols-[1fr_220px_220px]">
          <h2 class="text-brand">Opcionais</h2>
          <h3 class="text-center text-brand">Urbano</h3>
          <h3 class="text-center text-brand">Rural</h3>
        </div>

        <div
          v-for="item in opcionais"
          :key="item.label"
          class="grid grid-cols-[1fr_180px_180px] items-center gap-4 border-b border-ink/10 px-6 py-4 text-center last:border-b-0 tablet-lg:grid-cols-[1fr_220px_220px]"
        >
          <p class="text-left text-sm text-ink tablet-lg:text-base">{{ item.label }}</p>
          <p class="font-semibold text-ink">{{ item.precoUrbano }}</p>
          <p class="font-semibold text-ink">{{ item.precoRural }}</p>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <CtaButton variant="primary" to="/testar-gratis" class="w-full! max-w-[297px]">
          Testar grátis por 30 dias
        </CtaButton>
      </div>
    </div>
  </section>
</template>
