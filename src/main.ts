import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { initDemoI18n } from './utils/i18n/i18n';
import { initPureDemoMixin } from 'src/utils/mixin/pure-mixin';
import { initPureAdapter } from 'src/packages/common/pure/adapter';

import PressPopupCell from './packages/press-popup-cell/press-popup-cell.vue';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

initDemoI18n(app);
initPureDemoMixin(app)
initPureAdapter(app)

app.component('PressPopupCell', PressPopupCell)

// @ts-ignore
// eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
app.component('Button', 'button')

app.mount('#app')