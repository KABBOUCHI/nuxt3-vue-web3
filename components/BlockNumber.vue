<template>
  <span class="font-medium">Block Number</span>
  <span role="img" aria-label="numbers"> 🔢 </span>
  <span>{{ blockNumber === null ? "Error" : blockNumber || "" }}</span>
</template>

<script setup lang="ts">
const { library, chainId } = useWeb3();
const blockNumber = ref<number | null>();

const fetchBlockNumber = async () => {
  if (!!library.value) {
    blockNumber.value = await library.value.eth.getBlockNumber();
  }
};

watch([library, chainId], fetchBlockNumber);

useIntervalFn(fetchBlockNumber, 10000);
</script>
