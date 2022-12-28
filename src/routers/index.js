import { useRoutes } from 'react-router-dom';
export const routes = [
    {
        path: '/',
        exact: true,
        component: () => import('../App'),
        childrens: [
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
    },
];

const Routes = () => (
    useRoutes(routes)
)
export default Routes;