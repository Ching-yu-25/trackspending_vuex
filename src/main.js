import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //要用VUEX 要導入
/*fontAwesome*/
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faPlus,
  faPencilAlt,
  faTrashAlt,
  faTimes,
  faChartBar,
  faHome,
  faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faPencilAlt, faTrashAlt, faTimes, faChartBar, faHome, faFileInvoiceDollar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/*vue 日曆套件*/
import VCalendar from 'v-calendar';
// import VDatePicker from 'v-calendar';
Vue.use(VCalendar, {
  componentPrefix: 'v',
});
// Vue.use(VDatePicker, {
//   componentPrefix: 'v',
// });

Vue.config.productionTip = false

/*event bus*/
Vue.prototype.$bus = new Vue();


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')