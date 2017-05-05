import { assign } from 'lodash';
import { IState } from '../model'

import {
  NAV_BREADCRUMB_MODULE,
  NAV_BREADCRUMB_RES } from "../actions/ActionTypes"
import initialState from '../constants/state';

export default (state, action)  => {
  let previousState = (state ? state : initialState());
  switch (action.type) {
    case NAV_BREADCRUMB_MODULE:
      return setBreadcrumbModule(previousState, action);
    case NAV_BREADCRUMB_RES:
      return setBreadcrumbRes(previousState, action);
    default:
      return previousState;
  }
}

function setBreadcrumbModule(state, action) {
  const modList = action.payload.map((item)=>{return {text:item}})
  const module = [{text:"主页"},...modList]
  return assign({}, state, {breadcrumb:{module:module, res:[]}});
}

function setBreadcrumbRes(state, action) {
  return assign({}, state, {breadcrumb:{...state.breadcrumb, res:action.payload}});
}




