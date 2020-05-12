<template>
  <div>
    <v-app>
      <form>
        <v-row>
          <v-col>
            <v-text-field label="Descrição" v-model="novoProduto.descricao"></v-text-field>
            <v-text-field label="Preço" v-model="novoProduto.preco"></v-text-field>
            <v-text-field label="Imagem"></v-text-field>
          </v-col>
          <v-col>
            <center>
              <v-avatar size="250" tile>
                <v-img :src="novoProduto.imagem"></v-img>
              </v-avatar>
            </center>
          </v-col>
        </v-row>
        <v-row>
          <v-btn @click="cadastrarProduto">cadastrar</v-btn>
        </v-row>
      </form>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novoProduto: {
        descricao: "",
        preco: "",
        imagem: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg"
      }
    };
  },
  methods: {
    cadastrarProduto() {
      this.$emit("cadastrar-produto", this.novoProduto);
    }
  }
};
</script>