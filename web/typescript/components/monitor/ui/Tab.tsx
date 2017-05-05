import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export  class Tab extends React.Component<any, any> {
	render() {
		return <div className="tab">{this.props.children}</div>
	}
}


export  class TabMenu extends React.Component<any, any> {
	render() {
		return <div className="tab-menu">{this.props.children}</div>
	}
}

export  class TabMenuButton extends React.Component<any, any> {
	constructor(props) {
 		super(props);
    }

    private reset = () => {
    	const {tabIndex} = this.props;
    	const node = ReactDOM.findDOMNode(this);
		const tab = $(node).parent().parent();

		tab.find("button").each((index, el)=>{
			if (node != el) {
				$(el).removeClass("blue")
			}
		});

		tab.find(".tab-panel").each((index, el)=>{
			if ( !($(el).data("tab-index") == tabIndex) ) {
				$(el).removeClass("active")
			}
		});
    }


    private getTabPanel = () => {
    	const {tabIndex} = this.props;
    	const node = ReactDOM.findDOMNode(this);
		const tab = $(node).parent().parent();
		const tabPanel = tab.find("[data-tab-index='" + tabIndex + "']");
		return tabPanel
    }

	handleClick = () => {
		this.reset();
		const node = ReactDOM.findDOMNode(this);
		const tabPanel = this.getTabPanel()
		if (!$(node).hasClass("blue"))
			$(node).addClass("blue")
		if (!tabPanel.hasClass("active"))
			tabPanel.addClass("active")
	}

	render() {
		const {text, active} = this.props;
		return <button className={classNames("mini", "ui", {"blue":active} ,"button", "tab-menu-btn")} onClick={this.handleClick}>
					{text}
			   </button>
	}
}


export  class TabPanel extends React.Component<any, any> {
	render() {
		const {tabIndex, active, styleList} = this.props;
		return <div className={classNames("tab-panel", {"active":active})} data-tab-index={tabIndex} style={styleList}>{this.props.children}</div>
	}
}