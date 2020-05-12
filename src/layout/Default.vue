<template>
  <v-app>
    <v-toolbar color="#FFFF66" flat prominent>
      <template v-slot:extension>
        <v-btn text to="/">Comprar</v-btn>
        <v-btn text to="/sell">Vender</v-btn>
        <v-spacer></v-spacer>
        <v-btn text to="/register">Crie sua conta</v-btn>
        <v-btn text to="/login">Entre</v-btn>
      </template>
    </v-toolbar>

    <v-container>
      <slot></slot>
    </v-container>

    <v-spacer></v-spacer>
    <v-footer absolute center>
      {{ new Date().getFullYear() }} —
      <strong>Alura market place</strong>
    </v-footer>
  </v-app>
</template>


