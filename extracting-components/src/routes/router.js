const App = () => import("@/views/Workcation.vue");
const Inbox = () => import("@/views/Inbox.vue");
const Storyboard = () => import("@/views/Storyboard.vue");
const HelloWorld = () => import("@/components/HelloWorld.vue");
const DestinationCardBoard = () => import("@/views/storyboard/destination-card-board.vue");
const PropertyCardBoard = () => import("@/views/storyboard/property-card-board.vue");
const StarRatingBoard = () => import("@/views/storyboard/star-rating-board.vue");
const BadgeBoard = () => import("@/views/storyboard/badge-board.vue");
const DropdownMenuBoard = () => import("@/views/storyboard/dropdown-menu-board.vue");
const AlertBoard = () => import("@/views/storyboard/alert-board.vue");

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/inbox",
    component: Inbox
  },
  {
    path: "/storyboard",
    component: Storyboard,
    children: [
      {
        path: "helloworld",
        component: HelloWorld
      },
      {
        path: "destinationcard",
        component: DestinationCardBoard
      },
      {
        path: "propertycard",
        component: PropertyCardBoard
      },
      {
        path: "starratingcard",
        component: StarRatingBoard
      },
      {
        path: "badgeboard",
        component: BadgeBoard
      },
      {
        path: "dropdownmenu",
        component: DropdownMenuBoard
      },
      {
        path: "alert",
        component: AlertBoard
      }
    ]
  }
];

export default routes;
