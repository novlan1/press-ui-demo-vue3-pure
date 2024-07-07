import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PressUIVue3 from 'press-ui-vue3';

import { initDemoI18n } from './utils/i18n/i18n';
import { initMixin } from './utils/mixin/mixin';

import PressCell from './packages/press-cell/press-cell.vue';
import PressPicker from './packages/press-picker/press-picker.vue';
import PressPopupCell from './packages/press-popup-cell/press-popup-cell.vue';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PressUIVue3)
app.use(createPinia())
app.use(router)

initDemoI18n(app);
initMixin(app);

app.component('PressCell', PressCell)
app.component('PressPicker', PressPicker)
app.component('PressPopupCell', PressPopupCell)

app.mixin({
  methods: {
   t(value) {
    return value;
   }
 }
})

app.mount('#app')
