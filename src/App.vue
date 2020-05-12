<template>
  <div id="app">
    <Default>
      <router-view
        @cadastrar-produto="cadastrarProduto"
        @cadastrar-usuario="cadastrarUsuario"
        @usuario-autenticado="autenticarUsuario"
        v-bind="minhasPropriedades"
      ></router-view>
    </Default>
  </div>
</template>

<script>
import Default from "./layout/Default";

export default {
  components: {
    Default
  },
  data() {
    return {
      autenticacao: false,
      produtos: [],
      usuarios: []
    };
  },
  methods: {
    cadastrarProduto(produto) {
      this.produtos.push(produto);
    },
    cadastrarUsuario(usuario) {
      this.usuarios.push(usuario);
    },
    autenticarUsuario() {
      this.autenticacao = true;
    }
  },
  computed: {
    minhasPropriedades() {
      if (this.$route.name === "Comprar") {
        return { produtos: this.produtos };
      }
      if (this.$route.name === "Login") {
        return { usuarios: this.usuarios };
      }
      return {};
    }
  }
};
</script>
