import { combineReducers } from 'redux';
import monitorReducer from './MonitorReducer';
import resourceReducer from './ResourceReducer';
import navigatorReducer from './NavigatorReducer';
import topologyReducer from './TopologyReducer';
import alertReducer from './alertReducers';

const rootReducer = combineReducers({
	monitorReducer,
	resourceReducer,
	navigatorReducer,
	topologyReducer,
	alertReducer
});

export default rootReducer;