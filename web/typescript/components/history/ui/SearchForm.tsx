import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export  class SearchForm extends React.Component<any, any> {
	render() {
		const {icon, title} = this.props;
		return (
			<div className="ui mini form">
	          <div className="fields">
	            <div className="inline field">
	              <label>开始</label>
	              <div className="ui mini icon input">
	                <input type="text" placeholder="" />
	                <i className="calendar icon"></i>
	              </div>
	            </div>

	            <div className="inline field">
	              <label>结束</label>
	              <div className="ui mini icon input">
	                <input type="text" placeholder="" />
	                <i className="calendar icon"></i>
	              </div>
	            </div>

	            <div className="inline field">
	              <div className="ui mini teal button">查 询</div>
	            </div>
	          </div>
	        </div>
		)
	}
}