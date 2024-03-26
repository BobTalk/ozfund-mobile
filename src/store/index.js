import Vue from "vue";
import Vuex from "vuex";
import Metamask from './modules/metamask'
import Wallet from './modules/wallet'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Metamask,
    Wallet
  }
});
