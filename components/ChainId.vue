<template>
  <span class="font-medium">Chain Id</span>
  <span role="img" aria-label="chain"> ⛓ </span>
  <span>{{ chainId || "" }}</span>
</template>

<script setup lang="ts">
const { chainId } = useWeb3();
</script>
