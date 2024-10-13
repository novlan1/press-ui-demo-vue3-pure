import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import SwiperNext from 'swiper-next';
import 'swiper-next/dist/index.css';


import { initDemoI18n } from 'press-ui/locale/demo-lang';
import { initPureDemoMixin } from 'src/utils/mixin/pure-mixin';
import { initPureAdapter } from 'press-ui/common/pure/adapter';

import PressPopupCell from 'press-ui/press-popup-cell/press-popup-cell.vue';


import App from './App.vue';
import router from './router';

const app = createApp(App as any);

app.use(createPinia());
app.use(router);

initDemoI18n(app);
initPureDemoMixin(app);
initPureAdapter(app);

app.component('PressPopupCell', PressPopupCell as any);

// @ts-ignore
// eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
app.component('Button', 'button');
app.use(SwiperNext);
app.mount('#app');
