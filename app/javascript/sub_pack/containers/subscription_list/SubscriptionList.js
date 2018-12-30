import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSubscriptions } from '../../actions';
import SingleSubscription from '../../components/single_subscription/SingleSubscription';

class SubscriptionList extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeSubscription: ""
    }
  };

  componentDidMount() {
    this.props.fetchSubscriptions()
  };

  handleClickOnSub = (subscription) => {
    this.setState({activeSubscription: subscription.id})
  };

  render(){
		let subs;
		if(this.props.subscriptions.length > 0){
			subs = this.props.subscriptions.map( sub => {
				return <SingleSubscription
				 	key={sub.id}
				 	id={sub.id}
				 	frequency={sub.frequency}
				 	title={sub.title}
					amount={sub.amount_cents}
					dueDate={sub.due_date}
					endDate={sub.end_date}
					category={sub.category_id}
					bank={sub.bank_account_id}
					user={sub.user_id}
          handleClickOnSub={this.handleClickOnSub}
          activeSub={this.state.activeSubscription}
				 />
			})

		}
		return (
			<div className="container">{subs}</div>
			)
	}
}
function mapStateToProps(state){
	return({subscriptions: state.subscriptions})
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchSubscriptions}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList);
