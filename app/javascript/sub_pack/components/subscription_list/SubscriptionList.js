import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchSubscriptions} from '../../actions';
class SubscriptionList extends Component{
		componentDidMount() {
			this.props.fetchSubscriptions()
		}
		render(){
			let subs;
			if(this.props.subscriptions.length > 0){
				console.log(this.props.subscriptions);
				subs = this.props.subscriptions.map( sub => {
					return <div>{sub.title}</div>
				})
		
			}
			return (
				<div>{subs}</div>
				)
		}
}
function mapStateToProps(state){
	console.log(state.subscriptions.subscriptions)
	return({subscriptions: state.subscriptions})
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchSubscriptions}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);