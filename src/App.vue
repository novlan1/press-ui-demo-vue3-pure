<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { setLang } from './utils/i18n/i18n';
setLang();

onMounted(() => {
  document.documentElement.style.setProperty('--window-top', '44px');
});

</script>

<template>
  <div style="height:100%;">
    <RouterView />
  </div>
</template>

<style lang="scss" src="src/utils/style/demo.scss"></style>
<style>
</style>
