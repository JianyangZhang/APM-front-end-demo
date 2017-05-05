import { combineReducers } from "redux";
import { assign } from 'lodash';
import initialState from '../constants/state';
// import { simulated_alerts } from "../constants/simulated_alerts";

const defaultState = initialState();

export default  (previousState = defaultState, action) => {
    switch (action.type) {
        case "RECEIVED_ALERTS":
            console.log("获取数据成功");
            return assign({}, previousState, {alert:action.alerts});
        case "FETCH_ALERTS_ERROR":
            console.log("获取数据失败: ", action.error);
            return previousState 
        case "FETCHING_ALERTS":
            console.log("正在请求数据...");
        default:
            return previousState;
    }
}

