<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/school.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-5" cols="5"> </v-col>

      <v-col class="mb-5" cols="2">
        <h2 class="headline font-weight-bold mb-3">Iniciar Sesion</h2>

        <v-row justify="center">
          <v-text-field
            v-model="user.name"
            required
            outlined
            dense
            label="Nombre"
          ></v-text-field>
        </v-row>
        <v-row justify="center">
          <v-text-field
            v-model="user.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            required
            outlined
            dense
          ></v-text-field>
        </v-row>
        <v-row justify="center">
          <v-btn
            color="success"
            class="mr-4"
            @click="$router.push('studentTable'), validate"
          >
            Iniciar
          </v-btn>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="5"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    user: {},
    show1: false,
  }),
  methods: {
    validate() {},
  },
};
</script>
