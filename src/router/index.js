import Vue from 'vue'
import Router from 'vue-router'
import index_top from "../components/index/index_top";
import index_mid from "../components/index/index_mid";
import room_picture from "../components/room/room_picture";
import room_list from "../components/admin/room_list";
import room_order from "../components/room/room_order"
import room_search_result from "../components/room/room_search_result";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index_top,
      children:[{
        path:'/',
        name:'index_mid',
        component:index_mid,
      },
        {
          path: '/room',
          name: 'room',
          component: room_picture,

      }, {
          path: '/order',
          name: 'order',
          component: room_order,

        },
        // {
        //   path: '/room_search_result',
        //   name: 'room_search_result',
        //   component: room_search_result,
        // }
      ],
    },
    {
      path: '/search',
      name: 'search',
      component: room_list,
    },





  ]
})
