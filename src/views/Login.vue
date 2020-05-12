<template>
  <div>
    <v-app id="inspire" dark>
      <form class="ma-2">
        <v-text-field v-model="usuario.email" label="Email"></v-text-field>
        <v-text-field v-model="usuario.senha" label="Senha"></v-text-field>
        <v-btn @click="verificarUsuario">Login</v-btn>
      </form>
    </v-app>
  </div>
</template>

<script>
export default {
  props: ["usuarios"],
  data() {
    return {
      usuario: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    verificarUsuario() {
      this.usuarios.filter(usuario => {
        if (
          usuario.email == this.usuario.email &&
          usuario.senha == this.usuario.senha
        ) {
          this.$emit("usuario-autenticado");
        }
      });
    }
  }
};
</script>