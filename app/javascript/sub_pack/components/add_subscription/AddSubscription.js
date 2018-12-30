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
      									 amount_cents: '',
      									 due_date: '',
      									 end_date: '',
      									 category: '',
      									 bank_account: '',

      								}}
      	onSubmit={(subscription, { setSubmitting }) => {
          setSubmitting(true)
        setTimeout(() => {
          this.props.AddSubscription(subscription)
          setSubmitting(false)
        }, 3000);
      }}
      validationSchema={Yup.object().shape({
         title: Yup.string().required('Please enter a name'),
         frequency: Yup.mixed()
         		.required()
         		.oneOf(['Monthly', 'Yearly','Weekly'], 'Please enter'),
					amount_cents: Yup.number().integer().required('pease enter amount'),
					due_date: Yup.date().min(new Date(), 'please enter a valid date')
            .required('Pleae enter due date'),
					end_date: Yup.date().min(new Date(), 'please enter a valid date')
            .required('please enter end date'),
					category: Yup.string().required('select field'),
					bank_account: Yup.string().required()
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
          <label htmlFor="amount_cents" style={{ display: "block" }}>
             Amount
          </label>
          <Field name="amount_cents" type="integer" />
          {errors.amount_cents && touched.amount_cents ? <div>{errors.amount_cents}</div> : null}
          <label htmlFor="due_date" style={{ display: "block" }}>
             Due Date
          </label>
          <Field name="due_date" type="date" />
          {errors.due_date && touched.due_date ? <div>{errors.due_date}</div> : null}
          <label htmlFor="end_date" style={{ display: "block" }}>
             End Date
          </label>
          <Field name="end_date" type="date" />
          {errors.end_date && touched.end_date ? <div>{errors.end_date}</div> : null}
          <label htmlFor="bank_account" style={{ display: "block" }}>
             Bank Account
          </label>
          <Field name="bank_account" type="string" />
          {errors.bank_account && touched.bank_account ? <div>{errors.bank_account}</div> : null}
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