import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Home from './pages/Home.vue'
import Policies from './pages/Policies.vue'
import './style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/policies', component: Policies },
]

export const createApp = ViteSSG(App, { routes })
