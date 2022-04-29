<template>
  <span class="font-medium">Balance</span>
  <span role="img" aria-label="gold"> 💰 </span>
  <span>{{
    balance === null
      ? "Error"
      : balance
      ? `Ξ${library.utils.fromWei(balance)}`
      : ""
  }}</span>
</template>

<script setup lang="ts">
const { account, library, chainId } = useWeb3();
const balance = ref<string | null>();

watch([account, library, chainId], () => {
  if (!!library.value && !!account.value) {
    library.value.eth
      .getBalance(account.value)
      .then((value: any) => {
        balance.value = value;
      })
      .catch(() => {});
  }
});
</script>
