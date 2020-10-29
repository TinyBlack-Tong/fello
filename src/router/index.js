import Vue from 'vue'
import Router from 'vue-router'
import index_top from "../components/index/index_top";
import index_mid from "../components/index/index_mid";
import room_picture from "../components/room/room_picture";
import admin from "../components/admin/admin";
import room_order from "../components/room/room_order";
import room_search_result from "../components/room/room_search_result";
//发布房屋
import room_publish from "../components/house_owner/room_publish";
import room_publish_index from "../components/house_owner/room_publish_index";
import room_publish_basic from "../components/house_owner/room_publish_basic";
import room_publish_location from "../components/house_owner/room_publish_location";
import room_publish_picture from "../components/house_owner/room_publish_picture";
import room_publish_room_information from "../components/house_owner/room_publish_room_information";
import room_publish_room_price from "../components/house_owner/room_publish_room_price";
import room_publish_phone from "../components/house_owner/room_publish_phone";

import room_monitor from "../components/house_owner/room_monitor";
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
        {
          path: '/room_search_result',
          name: 'room_search_result',
          component: room_search_result,
        },

      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
    },
    {
      path: '/room_publish',
      name: 'publish',
      component: room_publish,
      children:[
        {
        path: '/room_publish_index',
        name: 'room_publish_index',
        component: room_publish_index,
      },
        {
          path: '/room_publish_basic',
          name: 'room_publish_basic',
          component: room_publish_basic,
        },
        {
          path: '/room_publish_location',
          name: 'room_publish_location',
          component: room_publish_location,
        },
        {
          path: '/room_publish_picture',
          name: 'room_publish_picture',
          component: room_publish_picture,
        },
        {
          path: '/room_publish_room_information',
          name: 'room_publish_room_information',
          component: room_publish_room_information,
        },
        {
          path: '/room_publish_room_price',
          name: 'room_publish_room_price',
          component: room_publish_room_price,
        },
        {
          path: '/room_publish_phone',
          name: 'room_publish_phone',
          component: room_publish_phone,
        },


      ]


    },
    {
      path: '/room_monitor',
      name: 'room_monitor',
      component: room_monitor,
    },




  ]
})
