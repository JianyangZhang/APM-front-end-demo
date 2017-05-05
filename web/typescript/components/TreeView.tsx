import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';
// import { Link } from 'react-router';

export class TreeViewCloseButton extends React.Component<any, any> {

	render() {
		const {handleClick} = this.props;
		return (
			<div className="tree-bar-close">
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

export class TreeView extends React.Component<any, any> {

	shouldComponentUpdate(nextProps, nextState) {
		const itemList = this.props;
    	const nextItemList  = nextProps["itemList"];
    	if (itemList == nextItemList) {
    		console.log("treeview not update")
    		return false;
    	}
    	return true;
    }

	render() {
		const {itemList, handleClick} = this.props;
		return (
			<div className="tree-bar">
				<TreeViewSearch />
				<div className="ui inverted divider"></div>
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
            </div>
		)
	}
}