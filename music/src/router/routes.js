
 const routes = [
    { 
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        name:'login',
        autorization:false,
        component:()=>import ('@/views/login')
    },{
        path:'/home',
        name:'home',
        component:()=>import ('@/views/home'),
        redirect:'/home/rank',
        meta:{
            autorization:true
        },
        children:[
            {
                path:'/home/rank',
                name:'rank',
                meta:{
                    autorization:true
                },
                component:()=> import ('@/views/home/rank')
            },
            {
                path:'/home/list',
                name:'list',
                component:()=> import ('@/views/home/list')
            },
            {
                path:'/home/search',
                name:'search',
                component:()=> import ('@/views/home/search')
            },
        ]
    },
    {
        path:'/detail',
        name:'detail',
        component:()=>import ('@/views/detail')
    }
]
export default routes