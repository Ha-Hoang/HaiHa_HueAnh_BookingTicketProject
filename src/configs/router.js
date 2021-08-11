import SignIn from "../module/main/pages/sign-in/sign-in.page";
import SignUp from "../module/main/pages/sign-up/sign-up.page";
import MovieDetail from "../module/main/pages/movie-detail/movie-detail.page";
import Home from "../module/main/pages/home/home.page";
import Dashboard from "../module/admin/pages/dashboard/dashboard.page";
import UserManagement from "../module/admin/pages/user-managements/user-management.page";
import BookingTicket from "../module/main/pages/booking-ticket/booking-ticket.page";
export const routerMain = [
  {
    path: "/signin",
    exact: true,
    Component: SignIn,
  },
  {
    path: "/signup",
    exact: true,
    Component: SignUp,
  },
  {
    path: "/moviedetail/:movieCode",
    exact: true,
    Component: MovieDetail,
  },
  {
    path: "/bookingticket/:schedulecode",
    exact: true,
    Component: BookingTicket,
  },
  {
    path: "/",
    exact: true,
    Component: Home,
  },
];

export const routerAdmin = [
  {
    path: "/admin",
    exact: true,
    Component: Dashboard,
  },
  {
    path: "/admin/user-management",
    exact: true,
    Component: UserManagement,
  },
];
