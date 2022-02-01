
const routes = [
  {
    path: '/',
    component: () => import('layouts/capa.vue')
  },
  {
    path: '/MainLayout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: '/teste', component: () => import('pages/teste.vue') },
      { path: '/login', component: () => import('layouts/login.vue') },
      { path: '/principal', component: () => import('pages/principal.vue') },
      { path: '/vue', component: () => import('pages/vue.vue') },
      { path: '/temp', component: () => import('pages/temp.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
