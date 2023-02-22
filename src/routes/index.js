import { HeaderOnly } from "~/components/Layout"
import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Search from "~/pages/Search"
import Upload from "~/pages/Upload"

const pubicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search },
]
const privateRoutes = [

]
export { privateRoutes, pubicRoutes }