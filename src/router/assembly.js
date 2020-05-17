import Loadable from '@@/Loadable'

const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Reg = Loadable(() => import('@/pages/reg'))
const Echart = Loadable(() => import('@/pages/echart'))
const Table = Loadable(() => import('@/pages/table'))
const Form = Loadable(() => import('@/pages/form'))
const Sample = Loadable(() => import('@/pages/sample'))
export {
  Home,
  Login,
  Reg,
  Echart,
  Table,
  Form,
  Sample,
}
