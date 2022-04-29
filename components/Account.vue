<template>
  <span class="font-medium">Account</span>
  <span role="img" aria-label="robot"> 🤖 </span>
  <span>
    {{
      account === null
        ? "-"
        : account
        ? `${account.substring(0, 6)}...${account.substring(
            account.length - 4
          )}`
        : ""
    }}
  </span>
</template>

<script setup lang="ts">
const { account } = useWeb3();
</script>
