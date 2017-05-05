import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export  class Select extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        onChange:(val, text, elem) => {},
        defaultText:"请选择",
        defaultValue:null,
        multiple:false,
        data:[]
    };

	componentDidMount() {
		const node = ReactDOM.findDOMNode(this);
		const {onChange} = this.props;
		$(node).dropdown({
			onChange:onChange,
			showOnFocus:false
		});
    }

    getText = () => {
    	const {defaultValue, data} = this.props;
    	let result = null
    	if (defaultValue) {
    		for (let item of data) {
    			if (item.value == defaultValue){
    				result = item.name
    				break;
    			}
    		}
    	}
    	return result;
    }

	render() {
		const {data, name, defaultText, multiple , defaultValue} = this.props;
		const text = defaultValue ? this.getText() : defaultText;

		return (
			<div className={classNames("ui", "fluid", {"multiple":multiple} , "search", "selection", "dropdown")}>
				<input type="hidden" name={name} defaultValue={defaultValue}/>
      			<i className="dropdown icon"></i>
      			<input className="search" />
      			<span className={classNames({"default":!defaultValue}, "text")}>{text}</span>
      			
				<div className="menu">
				{
					data.map((item, index)=>{
						return <div key={index} className="item" data-value={item.value}>{item.name}</div>
					})
				}
				</div>
      		</div>			
		)
	}
}




