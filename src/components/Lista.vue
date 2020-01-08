<template>
  <div>
    <div class="container">
      <ul class="list-group">
        <li
          v-for="(item, index) of fruta"
          :key="item.id"
          @click="aumentar(index)"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{item.nombre}}
          <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
        </li>
      </ul>
      <button @click="reiniciar">Reiniciar</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["fruta"])
  },
  methods: {
    ...mapMutations(["aumentar", "reiniciar"])
  }
};
</script>