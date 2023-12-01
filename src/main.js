
import './assets/main.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/fontawesome-free/css/fontawesome.css'; // Use the appropriate CSS file
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';




library.add(faBars);
library.add(faPinterest);
library.add(faYoutube);
library.add(faFacebook);
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

library.add(faLongArrowAltRight);


library.add(fas)




import App from './App.vue';
import router from './router';
library.add(faInstagram);
library.add(faTwitter);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
library.add(faStar, faShoppingCart);

app.use(createPinia());
app.use(router);

app.mount('#app');


new Vue({
    // ...
  }).$mount('#app');













