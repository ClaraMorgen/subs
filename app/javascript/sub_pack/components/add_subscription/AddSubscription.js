import React, { Component} from 'react';
import './AddSubscription.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddSubscription, fetchSubscriptions} from '../../actions/index';
import * as Yup from 'yup';


class AddSubscriptionForm extends Component {
  render(){

  return (
    <div>
    	<h1>Create Form</h1>
    	<Formik
      	initialValues={{ title: '',
      									 frequency: '', 
      									 amountCents: '',
      									 dueDate: '',
      									 endDate: '',
      									 category: '',
      									 bankAccount: '',
      									 user_id: 1,

      								}}
      	onSubmit={(subscription, { setSubmitting }) => {
        setSubmitting(false)
       	this.props.AddSubscription(subscription)
      }}
      validationSchema={Yup.object().shape({
         title: Yup.string().required('Please enter a name'),
         frequency: Yup.mixed()
         		.required()
         		.oneOf(['Monthly', 'Yearly','Weekly'], 'Please enter'),
					amountCents: Yup.number().integer().required('pease enter amount'),
					dueDate: Yup.date().required('Pleae enter due date'),
					endDate: Yup.date().required('please enter end date'),
					category: Yup.string().required('select field'),
					bankAccount: Yup.string().required()
      })}
      >
    {({ errors, status, touched, isSubmitting }) => (
        <Form style={{display: 'flex'}}>
        	<label htmlFor="title" style={{ display: "block" }}>
              Title
            </label>
          <Field name="title" />
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
          <label htmlFor="frequency" style={{ display: "block" }}>
             Frequency(Monthly, Weekly, Yearly)
          </label>
          <Field name="frequency" />
          {errors.frequency && touched.frequency ? (
            <div>{errors.frequency}</div>
          ) : null}
          <label htmlFor="amountCents" style={{ display: "block" }}>
             Amount
          </label>
          <Field name="amountCents" type="integer" />
          {errors.amountCents && touched.amountCents ? <div>{errors.amountCents}</div> : null}
          <label htmlFor="dueDate" style={{ display: "block" }}>
             Due Date
          </label>
          <Field name="dueDate" type="date" />
          {errors.dueDate && touched.dueDate ? <div>{errors.dueDate}</div> : null}
          <label htmlFor="endDate" style={{ display: "block" }}>
             End Date
          </label>
          <Field name="endDate" type="date" />
          {errors.endDate && touched.endDate ? <div>{errors.endDate}</div> : null}
          <label htmlFor="bankAccount" style={{ display: "block" }}>
             Bank Account
          </label>
          <Field name="bankAccount" type="string" />
          {errors.bankAccount && touched.bankAccount ? <div>{errors.bankAccount}</div> : null}
          <label htmlFor="category" style={{ display: "block" }}>
             Category
          </label>
         <Field component="select" name="category">
            <option value="media">Media</option>
            <option value="entertainment">Entertainment</option>
            <option value="phone">Phone</option>
          </Field>
          {errors.category && touched.category ? <div>{errors.category}</div> : null}
          <button type="submit" disabled={isSubmitting}>
          	{isSubmitting ? 'Submitting...' : 'Submit'}
					</button>
          </Form>
      )}
		</Formik>
   </div>
  )
}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AddSubscription, fetchSubscriptions }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddSubscriptionForm);