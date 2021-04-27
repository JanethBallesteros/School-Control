<template>
  <v-card elevation="2" class="mx-auto my-12" max-width="500">
    <v-card-title>Agregar Coordinador</v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="cordinator.name"
        :rules="nameRules"
        label="Nombre"
        required
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="cordinator.age"
        :rules="nameRules"
        label="Edad"
        required
        outlined
        dense
      ></v-text-field>

      <v-select
        v-model="cordinator.grade"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Grado Academico"
        required
        outlined
        dense
      ></v-select>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Agregar
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Cancelar </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cordinator: {},
    valid: true,
    nameRules: [(v) => !!v || "Campo Requerido"],
    keyRules: [
      (v) => !!v || "Campo Requerido",
      (v) => (v && v.length <= 10) || "Debe contener maximo 10 caracteres",
    ],
    select: null,
    items: ["Carrera Tecnica", "Licenciatura", "Maestria", "Doctorado"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
