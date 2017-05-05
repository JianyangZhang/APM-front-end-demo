import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { applyMiddleware , createStore , compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { persistState } from 'redux-devtools';
import DevTools from './devTools'

import { AppRouter } from "./routes"
import initialState from './constants/state';
import rootReducer from "./reducers/RootReducer";
import { IState } from './model';


let app = null;

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument()
);

const store = createStore(rootReducer, initialState() ,enhancer)

if (process.env.NODE_ENV == "production") {
	app = (
		<Provider store={store}>
			{AppRouter}
		</Provider>	
	);
} else {
	app = (
		<Provider store={store}>
			<div>
				{AppRouter}
				<DevTools />
			</div>
		</Provider>	
	)
}


ReactDOM.render(
	app,
    document.getElementById("apm")
);