import Vue from 'vue'
import Vuex from 'vuex'

import links from "./modules/links"
import auth from "./modules/auth"
import errors from "./modules/errors"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {links, auth, errors}
})
