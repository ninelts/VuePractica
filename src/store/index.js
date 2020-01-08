import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fruta: [
      { nombre: "Manza", id: 1, cantidad: 0 },
      { nombre: "Naranja", id: 2, cantidad: 0 },
      { nombre: "Pera", id: 3, cantidad: 0 },
      { nombre: "Platano", id: 4, cantidad: 0 }
    ]
  },
  mutations: {
    aumentar(state, index) {
      state.fruta[index].cantidad++;
    },
    reiniciar(state) {
      for (var i = 0; i >= fruta.length; i++) {
        state.fruta[i].cantidad = 0;
      }
    }
  },
  actions: {},
  modules: {}
});
