import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ListGroupPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Todos from './components/Todos.vue'
import Todoslist from './components/Todoslist.vue'
import List from './components/List.vue'
import Item from './components/Item.vue'

Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(ListGroupPlugin)

Vue.component("app-todos",Todos);
Vue.component("app-todoslist",Todoslist);
Vue.component("app-list",List);
Vue.component("app-item",Item);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: "Todos"
      }
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos,
      // children: [
      //   {
      //     // UserProfile will be rendered inside User's <router-view>
      //     // when /user/:id/profile is matched
      //     path: ':id',
      //     name: 'todoslist',
      //     component: Todoslist
      //   },
      // ]
    },
    {
      path: '/todos/:id',
      name: 'todoslist',
      component: Todoslist
    }

  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
