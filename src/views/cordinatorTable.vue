
<template>
  <v-data-table
    :headers="headers"
    :items="cordinators"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Coordinadores {{editedItem.name}}</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Agregar Maestro
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nombre"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.age"
                      label="Edad"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                       <v-select
                        v-model="editedItem.academicGrade"
                        :items="items"
                        :rules="[v => !!v || 'Campo requerido']"
                        label="Grado Academico"
                        required
                        outlined
                        dense
                        ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">¿Estas seguro que quieres eliminar el coordinador?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>

  export default {
    components: {

    },
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          value: 'name',
        },
        { text: 'Edad', value: 'age' },
        { text: 'Grado Academico', value: 'academicGrade' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      items: [
        'Carrera Tecnica',
        'Licenciatura',
        'Maestria',
        'Doctorado',
      ],
      cordinators: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        age: null,
        academicGrade: null,
        phone: null,
        contrat: null
      },
      defaultItem: {
        name: '',
        age: null,
        academicGrade: null,
        phone: null,
        contrat: null
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo coordinador' : 'Editar coordinador'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.cordinators = [
          {
            name: 'Jose Perez',
            age: 15,
            academicGrade: 'Carrera Tecnica',
          },
          {
            name: 'Gerardo Sanchez',
            age: 23,
            academicGrade: 'Licenciatura',

          },
          {
            name: 'Janeth Ballesteros',
            age: 26,
            academicGrade: 'Maestria',
            phone: 2346789432,

          },
          {
            name: 'Jose Jimenez',
            age: 30,
            academicGrade: 'Licenciatura',
            phone: 67234567980,

          },
          {
            name: 'Pedro Rosales',
            age: 35,
            academicGrade: 'Carrera Tecnica',


          },
          {
            name: 'Karla Colacion',
            age: 37,
            academicGrade: 'Licenciatura',

          },
          {
            name: 'Carlos Olivas',
            age: 39,
            academicGrade: 'Maestria',

          },
          {
            name: 'Silvia Estrada',
            age: 40,
            academicGrade: 'Carrera Tecnica',

          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.cordinators.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.cordinators.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.cordinators.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.cordinators[this.editedIndex], this.editedItem)
        } else {
          this.cordinators.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>