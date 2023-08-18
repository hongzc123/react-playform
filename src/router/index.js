import Home from '@/pages/home'
import Rich from '@/pages/rich'
import City from '@/pages/city'
// import Home from '../pages/home'
// import Rich from '../pages/rich'
// import City from '../pages/city'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/rich',
        component: Rich
    },
    {
        path: '/city',
        component: City
    }
]

export default routes
