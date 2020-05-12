<template>
  <div>
    <v-app id="inspire" dark>
      <form class="ma-2">
        <v-text-field label="Nome" v-model="novoUsuario.nome"></v-text-field>

        <v-text-field label="E-mail" v-model="novoUsuario.email"></v-text-field>

        <v-text-field label="Senha" v-model="novoUsuario.senha"></v-text-field>

        <v-btn @click="cadastrarUsuario">Registrar</v-btn>
      </form>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novoUsuario: {
        nome: "",
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    cadastrarUsuario() {
      this.$emit("cadastrar-usuario", this.novoUsuario);
    }
  }
};
</script>