import { type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        redirect: "dashboard",
      },
      {
        name: "DashboardPage",
        path: "dashboard",
        component: () => import("@/pages/DashboardPage.vue"),
        meta: { title: "Dashboard" },
      },
      {
        name: "ProfilePage",
        path: "profile",
        component: () => import("@/pages/ProfilePage.vue"),
      },
    ],
  },
  {
    name: "SignInPage",
    path: "/sign-in",
    component: () => import("@/pages/SignInPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    name: "StatusPage",
    path: "/status",
    component: () => import("@/pages/StatusPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    name: "UnauthorizedPage",
    path: "/errors/unauthorized",
    component: () => import("@/pages/UnauthorizedPage.vue"),
    meta: { requiresAuth: false },
  },
  {
    name: "NotFoundPage",
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/NotFoundPage.vue"),
    meta: { requiresAuth: false },
  },
]

export default routes
