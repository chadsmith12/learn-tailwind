const App = () => import('@/views/Workcation.vue');
const Storyboard = () => import('@/views/Storyboard.vue');
const HelloWorld = () => import('@/components/HelloWorld.vue');
const DestinationCardBoard = () => import("@/views/storyboard/destination-card-board.vue")

const routes = [
    {
        path: '/',
        component: App
    },
    { 
        path: '/storyboard',
        component: Storyboard,
        children: [
            {
                path: 'helloworld',
                component: HelloWorld
            },
            {
                path: 'destinationcard',
                component: DestinationCardBoard
            }
        ]
    }
]

export default routes;