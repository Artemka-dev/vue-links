import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from "@/utils/message.plugin"

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

import "materialize-css/dist/js/materialize.min.js"

Vue.use(messagePlugin)

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyBT2edIG3Sd2GvWh14t07v9WhXfe6NKYPQ",
    authDomain: "vue-links-634d8.firebaseapp.com",
    databaseURL: "https://vue-links-634d8.firebaseio.com",
    projectId: "vue-links-634d8",
    storageBucket: "vue-links-634d8.appspot.com",
    messagingSenderId: "416726512411",
    appId: "1:416726512411:web:3339924b5e52efc0fe99be",
    measurementId: "G-YEHQWEXLC1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
    
}) 
