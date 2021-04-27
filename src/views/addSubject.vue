<template>
<v-card
  elevation="2"
  class="mx-auto my-12"
  max-width="500"
>
<v-card-title>Agregar Materia</v-card-title>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="subject.key"
      :counter="10"
      :rules="keyRules"
      label="Clave"
      required
      outlined
      dense
    ></v-text-field>

    <v-text-field
      v-model="subject.name"
      :rules="nameRules"
      label="Nombre"
      required
      outlined
      dense
    ></v-text-field>

    <v-text-field
      v-model="subject.period"
      :rules="nameRules"
      label="Semestre"
      required
      outlined
      dense
    ></v-text-field>

    <v-text-field
      v-model="subject.credits"
      :rules="nameRules"
      label="Creditos"
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
      subject: {},
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