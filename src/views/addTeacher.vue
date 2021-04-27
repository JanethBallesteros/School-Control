<template>
  <v-card elevation="2" class="mx-auto my-12" max-width="500">
    <v-card-title>Agregar Maestro</v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="teacher.key"
        :counter="10"
        :rules="keyRules"
        label="Clave"
        required
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="teacher.name"
        :rules="nameRules"
        label="Nombre"
        required
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="teacher.lastName"
        :rules="nameRules"
        label="Apellido paterno"
        required
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="teacher.secondName"
        :rules="nameRules"
        label="Apellido Materno"
        required
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="teacher.contrat"
        :rules="nameRules"
        label="Contrato "
        required
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="teacher.phones"
        :rules="nameRules"
        label="Telefono(s)"
        required
        outlined
        dense
      ></v-text-field>

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
    teacher: {},
    valid: true,
    nameRules: [(v) => !!v || "Campo Requerido"],
    keyRules: [
      (v) => !!v || "Campo Requerido",
      (v) => (v && v.length <= 10) || "Debe contener maximo 10 caracteres",
    ],
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
