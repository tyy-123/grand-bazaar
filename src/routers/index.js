const routes = [
    {
        path: '/',
        exact: true,
        component: () => import('../App'),
    },
    {
        path: '/home',
        component: () => import(''),
    },
    {
        path: '/auto',
        component: () => import(''),
    },
    {
        path: '/moments',
        component: () => import(''),
    },
]

export default routes;