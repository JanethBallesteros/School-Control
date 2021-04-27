import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import addStudent from "../views/AddStudent.vue"
import addTeacher from "../views/addTeacher.vue"
import addSubject from "../views/addSubject.vue"
import addCordinator from "../views/addCordinator.vue"
import enrollStudent from "../views/enrollStudent.vue"
import enrollTeacher from "../views/enrollTeacher.vue"
import enrollSubject from "../views/enrollSubject.vue"
import studentTable from "../views/studentTable.vue"
import teacherTable from "../views/TeacherTable.vue"
import cordinatorTable from "../views/cordinatorTable.vue"
import subjectTable from "../views/subjectTable.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/addStudent",
    name: "addStudent",
    component: addStudent,
  },
  {
    path: "/addTeacher",
    name: "addTeacher",
    component: addTeacher,
  },
  {
    path: "/addSubject",
    name: "addSubject",
    component: addSubject,
  },
  {
    path: "/addCordinator",
    name: "addCordinator",
    component: addCordinator,
  },
  {
    path: "/enrollStudent",
    name: "enrollStudent",
    component: enrollStudent,
  },
  {
    path: "/enrollTeacher",
    name: "enrollTeacher",
    component: enrollTeacher,
  },
  {
    path: "/enrollSubject",
    name: "enrollSubject",
    component: enrollSubject,
  },
  {
    path: "/studentTable",
    name: "studentTable",
    component: studentTable,
  },
  {
    path: "/teacherTable",
    name: "teacherTable",
    component: teacherTable,
  },
  {
    path: "/cordinatorTable",
    name: "cordinatorTable",
    component: cordinatorTable,
  },
  {
    path: "/subjectTable",
    name: "subjectTable",
    component: subjectTable,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
