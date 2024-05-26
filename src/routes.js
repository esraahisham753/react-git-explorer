import { lazy } from "react";

import Home from "./components/home";
const AboutUs = lazy(() => import("./components/about"));
const Users = lazy(() => import("./components/users"));
const SearchUser = lazy(() => import("./components/searchUser"));
const AuthProfile = lazy(() => import("./components/authProfile"));
const Login = lazy(() => import("./components/login"));
const NotFound = lazy(() => import("./components/notfound"));
const UserProfile = lazy(() => import("./components/userProfile"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false
  },
  {
    path: "/about",
    component: AboutUs,
    requiresAuth: false
  },
  {
    path: "/users",
    component: Users,
    requiresAuth: false
  },
  {
    path: "/search",
    component: SearchUser,
    requiresAuth: false
  },
  {
    path: "/authprofile",
    component: AuthProfile,
    requiresAuth: true
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false
  },
  {
    path: "/users/user/:username",
    component: UserProfile,
    requiresAuth: false
  },
];
