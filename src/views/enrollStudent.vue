<template>
<v-card
  elevation="2"
  class="mx-auto my-12"
  max-width="500"
>
<v-card-title>Inscribir Alumno</v-card-title>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="enroll.student"
      :rules="keyRules"
      label="Clave del Alumno"
      required
      outlined
      dense
    ></v-text-field>

    <v-text-field
      v-model="enroll.subject"
      :rules="keyRules"
      label="Clave de la Materia"
      required
      outlined
      dense
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Agregar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Cancelar
    </v-btn>

  </v-form>
  </v-card>
</template> 

<script>
  export default {
    data: () => ({
      enroll: {},
      valid: true,
      nameRules: [
        v => !!v || 'Campo Requerido',
      ],
      keyRules: [
        v => !!v || 'Campo Requerido',
        v => (v && v.length <= 10) || 'Debe contener maximo 10 caracteres',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>