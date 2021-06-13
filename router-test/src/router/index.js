import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/project/Project.vue'
import ProjectDetail from '../views/project/ProjectDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true
  },

  {
    path: '/all-projects',
    redirect: '/project'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
