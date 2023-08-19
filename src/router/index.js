import Home from '@/pages/home'
import Rich from '@/pages/rich'
import City from '@/pages/city'
import Ui from '@/pages/ui'
import Button from '@/pages/ui/button'
import Messages from '@/pages/ui/messages'
import Carousel from '@/pages/ui/carousel'
import Modals from '@/pages/ui/modals'
import Table from '@/pages/tables/'
import Basic from '@/pages/tables/basic'
import High from '@/pages/tables/high'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/ui',
        component: Ui,
        routes: [
            {
                path: '/ui/buttons',
                component: Button
            },
            {
                path: '/ui/messages',
                component: Messages
            },
            {
                path: '/ui/carousel',
                component: Carousel
            },
            {
                path: '/ui/modals',
                component: Modals
            }
        ]
    },
    {
        path: '/table',
        component: Table,
        routes: [
            {
                path: '/table/basic',
                component: Basic
            },
            {
                path: '/table/high',
                component: High
            }
        ]
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
