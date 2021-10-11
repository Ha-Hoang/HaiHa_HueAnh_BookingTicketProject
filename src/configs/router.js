import SignIn from "../module/main/pages/sign-in/sign-in.page";
import SignUp from "../module/main/pages/sign-up/sign-up.page";
import MovieDetail from "../module/main/pages/movie-detail/movie-detail.page";
import Home from "../module/main/pages/home/home.page";
import Dashboard from "../module/admin/pages/dashboard/dashboard.page";
import UserManagement from "../module/admin/pages/user-managements/user-management.page";

import PersonalInfo from "../module/main/pages/personal-info/personal-info.page";
import BookingTicket from "../module/main/pages/booking-ticket/booking-ticket.page";
import FilmManagement from "../module/admin/pages/film-managements/film-managements.page";
import AddFilm from "../module/admin/pages/film-managements/add-film/add-film.page";
import EditFilm from "../module/admin/pages/film-managements/edit-film/edit-film.page";
import AddUser from "../module/admin/pages/user-managements/add-user/add-user.page";
import Showtime from "../module/admin/pages/film-managements/showtime-film/showtime-film.page";
import EditUser from "../module/admin/pages/user-managements/edit-user/edit-user.page";

export const routerMain = [
  {
    path: "/personalInfo",
    exact: true,
    Component: PersonalInfo,
  },
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
  }
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
  {
    path: "/admin/film-management",
    exact: true,
    Component: FilmManagement,
  },
  {
    path: "/admin/film-management/add-film",
    exact: true,
    Component: AddFilm,
  },
  {
    path: "/admin/film-management/edit-film/:filmcode",
    exact: true,
    Component: EditFilm,
  },
  {
    path: "/admin/film-management/show-time/:schedulecode",
    exact: true,
    Component: Showtime,
  },
  {
    path: "/admin/user-management/add-user",
    exact: true,
    Component: AddUser,
  },
  {
    path: "/admin/user-management/edit-user/:taiKhoan",
    exact: true,
    Component: EditUser,
  },
];
