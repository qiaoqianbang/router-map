import Home from '../containers/home';
import Studentlist from '../containers/student/studentlist';
import Login from '../containers/user/login.jsx';
import Registry from '../containers/user/registry';
import Course from '../containers/course';
import Score from '../containers/score/index';
export default [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/home/studentlist',
        name: 'studentlist',
        component: Studentlist,
      },
      {
        path: '/home/course',
        name: 'course',
        component: Course,
      },
      {
        path: '/home/score',
        name: 'score',
        component: Score,
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registry',
    name: 'registry',
    component: Registry
  }
]