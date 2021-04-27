<template>
  <v-data-table :headers="headers" :items="subjects" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Materias</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Agregar Materia
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
                      v-model="editedItem.key"
                      label="Clave"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
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
                      v-model="editedItem.period"
                      label="Semestre"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="editedItem.credits"
                      label="Creditos"
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
              >¿Estas seguro que quieres eliminar el alumno?</v-card-title
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
        text: "Clave",
        align: "start",
        value: "key",
      },
      { text: "Nombre", value: "name" },
      { text: "Semestre", value: "period" },
      { text: "Creditos", value: "credits" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    subjects: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      period: null,
      credits: null,
      phone: null,
      key: null,
    },
    defaultItem: {
      name: "",
      period: null,
      credits: null,
      phone: null,
      key: null,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva materia" : "Editar materia";
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
      this.subjects = [
        {
          name: "Calculo",
          period: 15,
          credits: 6.0,
          phone: 244324556753,
          key: "JFUDFREHUG",
        },
        {
          name: "Lectura",
          period: 23,
          credits: 9.0,
          phone: 372435365765,
          key: "DVFDVFDDF",
        },
        {
          name: "Fisica",
          period: 26,
          credits: 16.0,
          phone: 2346789432,
          protein: 6.0,
          key: "DFVFDBFGNJNH",
        },
        {
          name: "Analitica",
          period: 30,
          credits: 3.7,
          phone: 67234567980,
          protein: 4.3,
          key: "HGNHGNTY",
        },
        {
          name: "Algebra",
          period: 35,
          credits: 16.0,
          phone: 493243242432,
          protein: 3.9,
          key: "DBDHGBGD",
        },
        {
          name: "Estadistica",
          period: 37,
          credits: 0.0,
          phone: 9467890543,
          key: "HTJTYJN",
        },
        {
          name: "Calculo II",
          period: 39,
          credits: 0.2,
          phone: 9876890345,
          key: "DFGDFGFDG",
        },
        {
          name: "Informatica",
          period: 40,
          credits: 3.2,
          phone: 8712354785,
          key: "HBRGHBRRT",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.subjects.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.subjects.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.subjects.splice(this.editedIndex, 1);
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
        Object.assign(this.subjects[this.editedIndex], this.editedItem);
      } else {
        this.subjects.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
