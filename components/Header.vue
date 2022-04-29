<template>
  <div>
    <h1 class="text-right">
      {{ active ? "🟢" : error ? "🔴" : "🟠" }}
    </h1>

    <h3
      :style="{
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: '1fr min-content 1fr',
        maxWidth: '24rem',
        lineHeight: '2rem',
        margin: 'auto',
      }"
    >
      <ChainId />
      <BlockNumber />
      <Account />
      <Balance />
    </h3>
  </div>
</template>

<script lang="ts">
const { active, error } = useWeb3();
</script>
