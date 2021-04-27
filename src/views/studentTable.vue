<template>
  <v-data-table
    :headers="headers"
    :items="students"
    class="elevation-1"
    
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Alumnos</v-toolbar-title>
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
              Agregar Alumno
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
                    md="8"
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
                    md="4"
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
                    <v-text-field
                      v-model="editedItem.address"
                      label="Domicilio"
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
                      v-model="editedItem.phone"
                      label="Telefono"
                      outlined
                      dense
                    ></v-text-field>
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
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">¿Estas seguro que quieres eliminar el alumno?</v-card-title>
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
        { text: 'Domicilio', value: 'address' },
        { text: 'Telfono', value: 'phone' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      students: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        age: null,
        address: null,
        phone: null,
      },
      defaultItem: {
        name: '',
        age: null,
        address: null,
        phone: null,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Alumno' : 'Editar Alumno'
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
        this.students = [
          {
            name: 'Jose Perez',
            age: 15,
            address: 6.0,
            phone: 244324556753,
          },
          {
            name: 'Gerardo Sanchez',
            age: 23,
            address: 9.0,
            phone: 372435365765,
          },
          {
            name: 'Janeth Ballesteros',
            age: 26,
            address: 16.0,
            phone: 2346789432,
            protein: 6.0,
          },
          {
            name: 'Jose Jimenez',
            age: 30,
            address: 3.7,
            phone: 67234567980,
            protein: 4.3,
          },
          {
            name: 'Pedro Rosales',
            age: 35,
            address: 16.0,
            phone: 493243242432,
            protein: 3.9,
          },
          {
            name: 'Karla Colacion',
            age: 37,
            address: 0.0,
            phone: 9467890543,
            protein: 0.0,
          },
          {
            name: 'Carlos Olivas',
            age: 39,
            address: 0.2,
            phone: 9876890345,
            protein: 0,
          },
          {
            name: 'Silvia Estrada',
            age: 40,
            address: 3.2,
            phone: 8712354785,
            protein: 6.5,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.students.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.students.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.students.splice(this.editedIndex, 1)
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
          Object.assign(this.students[this.editedIndex], this.editedItem)
        } else {
          this.students.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>