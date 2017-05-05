import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';


export  class Card extends React.Component<any, any> {
	render() {
		const {color, size, title, text, subText, styleList} = this.props;
		return (
			<div className={classNames("win-cards", [`${color}`])} style={styleList}>
              <div className={classNames("text", [`${size}`])}>
                <span className="value">{text}</span>
                <span className="desc">&nbsp;{subText}</span>
              </div>
              <div className="title">{title}</div>
            </div>
		)
	}
}