import 'isomorphic-fetch';
import {alert} from "./UrlMapping"

export const updateAlerts = () => {
    return (dispatch, getState) => {
        dispatch({ type: "FETCHING_ALERTS" });
        const url = alert.list
        return fetch(url).then(res=>{
             return  res.json();
        }).then(alerts => {
            dispatch({ type: "RECEIVED_ALERTS", alerts });
        }).catch(error => {
            dispatch({ type: "FETCH_ALERTS_ERROR", error });
        });
    }
}
