import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faStar, faSearch, faBell, faSun, faCloudMoon, faMoon, faHourglassStart, faHourglassHalf, faHourglassEnd } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUser, faEnvelope, faStar, faFacebook, faTwitter, faSearch, faBell, faSun, faCloudMoon, faMoon, faHourglassStart, faHourglassHalf, faHourglassEnd);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
