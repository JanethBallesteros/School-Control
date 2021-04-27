<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Control Escolar</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="$router.push('/'), validate" target="_blank" text>
        <span class="mr-2">Cerrar Sesion</span>
        <v-icon>mdi-logout </v-icon>
      </v-btn>
    </v-app-bar>
    <v-row>
      <v-col cols="12" md="3">
        <v-navigation-drawer v-if="$route.path != '/'" absolute permanent left>
          <template v-slot:prepend>
            <v-list-item two-line>
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/women/81.jpg" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title @click="$router.push(item.path)">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="12" md="9">
        <v-main>
          <router-view />
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
      {
        title: "Agregar Alumnos",
        icon: "mdi-account-plus",
        path: "addStudent",
      },
      {
        title: "Ver Alumnos",
        icon: "mdi-clipboard-list",
        path: "studentTable",
      },
      {
        title: "Incribir Alumnos",
        icon: "mdi-view-dashboard",
        path: "enrollStudent",
      },
      {
        title: "Agregar Docentes",
        icon: "mdi-account-plus",
        path: "addTeacher",
      },
      {
        title: "Ver Docentes",
        icon: "mdi-clipboard-list",
        path: "teacherTable",
      },
      {
        title: "Asignacion de Docentes",
        icon: "mdi-view-dashboard",
        path: "enrollTeacher",
      },
      {
        title: "Ver Coordinadores",
        icon: "mdi-view-dashboard",
        path: "cordinatorTable",
      },
      { title: "Agregar Materias", icon: "mdi-plus-box", path: "addSubject" },
      {
        title: "Ver Materias",
        icon: "mdi-clipboard-list",
        path: "subjectTable",
      },
      {
        title: "Asignacion de Materias",
        icon: "mdi-view-dashboard",
        path: "enrollSubject",
      },
    ],
    right: null,
  }),
};
</script>
