<script setup lang="ts">
import { RouterView } from 'vue-router';
import { setLang } from './utils/i18n/i18n';
setLang();
</script>

<template>
  <div style="height:100%;">
    <RouterView />
  </div>
</template>

<style lang="scss" src="src/utils/style/demo.scss"></style>
<style>
html {
  --window-top: 44px;
}
</style>
