import Vue from 'vue'
import Router from 'vue-router'
import navConfig from '@examples/nav.config'

Vue.use(Router)


const registerRoute = (navConfig) => {
    let routes = []
    Object.keys(navConfig).forEach((ele, index) => {
        let navs = navConfig[ele]

        routes.push({
            path: `/${ele}`,
            redirect: `/${ele}/${navs[0].name}`,
            children: [],
            component: () => import(`@examples/pages/${ele}`)
        })

        navs.forEach(nav => {
            addRoute(nav,ele,routes,index)            
        })
    })

    return routes
}


const addRoute = (page, flag, routes, index) => {
    
    let child = {
        path: page.path.slice(1),
        name: page.name,
        meta: {
            flag 
        },
        component: () => import(`@examples/demo/${page.name}`) 
    }

    routes[index].children.push(child)

}

let routes = registerRoute(navConfig) 

let defaultPath = '/components'

routes = routes.concat([{
    path: '/',
    redirect: defaultPath
},{
    path: '*',
    redirect: defaultPath
}])

export default new Router ({
    mode: 'history',
    routes 
})

