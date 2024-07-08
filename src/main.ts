import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import PressUIVue3 from 'press-ui-vue3';
// import "press-ui-vue3/lib/index.css"

import { initDemoI18n } from './utils/i18n/i18n';
import { initMixin } from './utils/mixin/mixin';
import { initPureDemoMixin } from 'src/utils/mixin/pure-mixin';

// import PressCell from './packages/press-cell/press-cell.vue';
// import PressPicker from './packages/press-picker/press-picker.vue';
import PressPopupCell from './packages/press-popup-cell/press-popup-cell.vue';
// import DemoBlock from './pages/demo-block/demo-block.vue';
import { initPureAdapter } from 'src/packages/common/pure/adapter';


import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(PressUIVue3)
app.use(createPinia())
app.use(router)

initPureDemoMixin(app)
initDemoI18n(app);
initMixin(app);
initPureAdapter(app)

console.log('app.component', app.component('PressCell'), app.component('xxxxx'))
// app.component('PressCell', PressCell)
// app.component('PressPicker', PressPicker)
app.component('PressPopupCell', PressPopupCell)

//@ts-ignore
// eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
app.component('Button', 'button')
// app.component('DemoBlock', DemoBlock)
// app.mixin({
//   methods: {
//    t(value) {
//     return value;
//    }
//  }
// })

app.mount('#app')
