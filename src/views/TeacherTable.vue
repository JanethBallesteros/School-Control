<template>
  <v-data-table :headers="headers" :items="teachers" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Maestros</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
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
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nombre"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="editedItem.lastName"
                      label="Apellido materno"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="editedItem.middleName"
                      label="Apellido materno"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="editedItem.contrat"
                      label="Contrato"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
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
              <v-btn color="blue darken-1" text @click="close">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >¿Estas seguro que quieres eliminar el maestro?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  components: {},
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nombre",
        align: "start",
        value: "name",
      },
      { text: "Apellido Paterno", value: "lastName" },
      { text: "Apellido Materno", value: "middleName" },
      { text: "Contrato", value: "contrat" },
      { text: "Telfono", value: "phone" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    teachers: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      lastName: null,
      middleName: null,
      phone: null,
      contrat: null,
    },
    defaultItem: {
      name: "",
      lastName: null,
      middleName: null,
      phone: null,
      contrat: null,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo maestro" : "Editar maestro";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.teachers = [
        {
          name: "Jose Perez",
          lastName: 15,
          middleName: 6.0,
          phone: 244324556753,
          contrat: "JFUDFREHUG",
        },
        {
          name: "Gerardo Sanchez",
          lastName: 23,
          middleName: 9.0,
          phone: 372435365765,
          contrat: "DVFDVFD DF",
        },
        {
          name: "Janeth Ballesteros",
          lastName: 26,
          middleName: 16.0,
          phone: 2346789432,
          protein: 6.0,
          contrat: "DFVFDBFGNJNH",
        },
        {
          name: "Jose Jimenez",
          lastName: 30,
          middleName: 3.7,
          phone: 67234567980,
          protein: 4.3,
          contrat: "HGNHGNTY",
        },
        {
          name: "Pedro Rosales",
          lastName: 35,
          middleName: 16.0,
          phone: 493243242432,
          protein: 3.9,
          contrat: "DBDHGBGD",
        },
        {
          name: "Karla Colacion",
          lastName: 37,
          middleName: 0.0,
          phone: 9467890543,
          contrat: "HTJTYJN",
        },
        {
          name: "Carlos Olivas",
          lastName: 39,
          middleName: 0.2,
          phone: 9876890345,
          contrat: "DFGDFGFDG",
        },
        {
          name: "Silvia Estrada",
          lastName: 40,
          middleName: 3.2,
          phone: 8712354785,
          contrat: "HBRGHBRRT",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.teachers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.teachers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.teachers.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.teachers[this.editedIndex], this.editedItem);
      } else {
        this.teachers.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
