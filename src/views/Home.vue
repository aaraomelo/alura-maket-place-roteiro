<template>
  <v-app>
    <center>
      <v-container v-for="(produto,i) in this.produtos" :key="i">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="produto.imagem"></v-img>
          <v-card-title class="pb-0">{{produto.descricao}}</v-card-title>
          <v-card-text class="text--primary">
            <div>R$ {{produto.preco}}</div>
          </v-card-text>
        </v-card>
      </v-container>
    </center>
  </v-app>
</template>

<script>
export default {
  props: ["produtos"]
};
</script>