import Vue from 'vue';

import App from './AppDark';
import router from './router';
import firebase from 'firebase';
import config from '../config/firebase.js';

import {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
} from 'vuetify';

import '../node_modules/vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        transitions
      },

    theme: {
        primary: '#f4993a',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
  });

Vue.config.productionTip = false;

firebase.initializeApp(config);

// Global variables
Vue.prototype.$basket = [];
Vue.prototype.$wishlist = [];

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
      },
    template: '<App/>'
  });
