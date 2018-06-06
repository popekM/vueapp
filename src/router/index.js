import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tasks from '@/components/Tasks'
import Products from '@/components/Products'
import Basket from '@/components/Basket'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/tasks',
        name: 'Lista zadań',
        component: Tasks
    },
    {
        path: '/products',
        name: 'Lista produktów',
        component: Products
    },
    {
        path: '/basket',
        name: 'Koszyk',
        component: Basket
    }
    ]
})
