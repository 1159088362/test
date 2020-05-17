import Loadable from '@@/Loadable'

const App = Loadable(() => import('@/pages/app'))
const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Reg = Loadable(() => import('@/pages/reg'))
export {
  App,
  Home,
  Login,
  Reg,
}
