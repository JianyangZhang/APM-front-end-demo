import * as React from "react";
import * as ReactDOM from "react-dom";
import Navigator from "./Navigator"
import { connect } from 'react-redux';
import { loadResData } from "../actions/ResourceActions";

export class App extends React.Component<any, any> {
	componentDidMount() {
       const {loadResData} = this.props;
       loadResData()
    }
	render() {
		return (
			<div>
				<Navigator />
				<div id="viewContainer">
					{this.props.children}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch  => ({
    loadResData:()=> dispatch(loadResData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);