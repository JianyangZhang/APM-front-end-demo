import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
// import { Link } from 'react-router';

export class TreeViewCloseButton extends React.Component<any, any> {

	render() {
		const {handleClick} = this.props;
		return (
			<div className="close">
          		<a href="#" onClick={handleClick}><i className="remove icon"></i></a>
            </div>
		)
	}
}

export class TreeViewSearch extends React.Component<any, any> {

	render() {
		return (
		 <div className="ui mini inverted icon input">
            <input type="text" placeholder="资源检索" />
            <i className="search icon"></i>
          </div>
		)
	}
}

export class TreeViewHeader extends React.Component<any, any> {

	render() {
		const {handleClose} = this.props;
		return (
		  <div className="tree-view-header">
            <div className="title">
              <i className="world icon"></i> 资源导航
            </div>
            <TreeViewCloseButton handleClick={handleClose}/>
          </div>
		)
	}
}

export class TreeItem extends React.Component<any, any> {
	handleItemClick = () => {
		const {handleClick, data} = this.props;
		handleClick(data);
	}

	render() {
		const {name,  type, itemList, handleClick} = this.props;
		let subItemList = null;
		if (type == "folder" && itemList && itemList.length > 0) {
			subItemList = (
				<div className="list">
				{
					itemList.map((item, index)=>{
						return <TreeItem key={item.id} name={item.name} type={item.type} 
						itemList={item.itemList} handleClick={handleClick} data={item}/>
					})
				}
				</div>
			)
		}

		return (
			<div className="item">
              <i className={classNames({"folder":(type=="folder"),"open":(type=="folder"),"file":(type=="file")},"icon")}></i>
              <div className="content">
                <div className="header">
                	{(type=="folder") ? <a>{name}</a> : <a onClick={this.handleItemClick}>{name}</a>}
                </div>
                {subItemList}
              </div>
            </div>
		)
	}
}

export class TreeViewContent extends React.Component<any, any> {

	render() {
		return (
		 	<div className="tree-view-content">{this.props.children}</div>
		)
	}
}

export class TreeContainer extends React.Component<any, any> {

	render() {
		return (
		 	<div className="tree-container">{this.props.children}</div>
		)
	}
}

export class TreeView extends React.Component<any, any> {
	constructor(props, context) {
	    super(props, context);
	    this.state = {transparent:true}
    }

    componentWillUnmount() {
    	$(window).unbind('scroll',this.handleScroll);
    }

	componentDidMount() {
		let node = ReactDOM.findDOMNode(this);
		$(node).mouseover((e)=>{
			this.setState({transparent:false})
		}).mouseleave((e)=>{
			this.setState({transparent:true})
		})
	}

	componentDidUpdate() {
		const {show} = this.props;
		if(show) {
			$(window).bind('scroll',this.handleScroll);
		} else {
			$(window).unbind('scroll',this.handleScroll);
		}
	}

	handleScroll = () => {
		const winScrollTop = $(window).scrollTop();
		const treeView = ReactDOM.findDOMNode(this);
		if (treeView)
			$(treeView).css({'top':(14 + winScrollTop )+'px'})
	}

	shouldComponentUpdate(nextProps, nextState) {
		const {itemList, show} = this.props;
		const {transparent} = this.state;
		if (transparent != nextState["transparent"]) {
			return true;
		}

		if (show != nextProps["show"]) {
			return true;
		}

    	const nextItemList  = nextProps["itemList"];
    	if (itemList == nextItemList) {
    		console.log("treeview not update")
    		return false;
    	}
    	return true;
    }

	render() {
		const {itemList, handleClick, handleClose, show} = this.props;
		return (
			<div className={classNames("tree-view", {"transparent":this.state.transparent, "show":show})}>
				<TreeViewHeader handleClose={handleClose} />
				<TreeViewContent>
					<TreeViewSearch />
					<div className="ui inverted divider"></div>
					<TreeContainer>
						<div className="ui inverted list">
						{
							itemList.map((item, index)=>{
								return (
								  (item.type == "folder") ? 
								   <TreeItem key={item.id} name={item.name}  type={item.type} 
								    itemList={item.itemList} handleClick={handleClick}/> :
								   <TreeItem key={item.id} name={item.name} type={item.type} 
								   	itemList={item.itemList} handleClick={handleClick} data={item}/>
								)
							})
						}
					    </div>
					</TreeContainer>
				</TreeViewContent>
            </div>
		)
	}
}