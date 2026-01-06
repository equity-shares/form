import { HashRouter, Route } from '@solidjs/router'
import Home from './Home'
import Confirmed from './Confirmed'

export default function App() {
    return(
        <HashRouter>
            <Route path="/" component={Home}/>
            <Route path="/confirmed" component={Confirmed}/>
        </HashRouter>
    )
}
