import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from "./views/App";
import Monitor from "./views/Monitor";
import Topology from "./views/Topology";
import Alert from "./views/Alert";
import History from "./views/History";

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Monitor}/>
	    <Route path="/monitor" component={Monitor}/>
	    <Route path="/topology" component={Topology}/>
	    <Route path="/alert" component={Alert}/>
	    <Route path="/history" component={History}/>
	</Route>
)

export const AppRouter = <Router routes={routes} history={browserHistory}/>

