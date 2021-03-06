// config
import config from '../config'

// Layouts
// import { NoBanner } from '../layouts'

// Pages
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Knowledge from '../pages/Knowledge';
import Hello from '../pages/Hello';
import BlogDetail from '../pages/BlogDetail';
import News from '../pages/News/News';

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.blog, component: Blog },
  { path: config.routes.knowledge, component: Knowledge },
  { path: config.routes.hello, component: Hello },
  { path: config.routes.blogDetail, component: BlogDetail},
  { path: config.routes.news, component: News},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }