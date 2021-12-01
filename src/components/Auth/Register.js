import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import validate from '../../utils/validate';
import { register } from '../../store/actions/auth';
import { showAlert } from '../../store/actions/app';

class Register extends Component {
	state = {
		values: {
			name: '',
			email: '',
			password: ''
		},
		errors: {
			name: false,
			email: false,
			password: false
		}
	}

	registerHandler = e => {
		e.preventDefault();

		const newErrors = validate('register', this.state.values);

		if(Object.keys(newErrors).length) {
			this.setState(state => ({
	    	...state,
				errors: {
					...state.errors,
					...newErrors
				}
	    }));

	    return false;
		}
	}
	
	changeHandler = e => {
		const name = e.target.name;
    const value = e.target.value;

    const newValues = {
      ...this.state.values,
      [name]: value
    }

    const newErrors = {
      ...this.state.errors,
      [name]: false
    }

    this.setState(state => ({
    	...state,
			values: newValues,
			errors: newErrors
    }));
	}

  render() {
    return (
			<div className="col-sm-4">
				<div className="signup-form">
					<h2><b>New Customer?</b></h2>
					<p>Creating an account has many benefits:</p>
					<li>Check out faster</li>
					<li>Keep more than one address</li>
					<li>Track orders and more</li>
						<button type="submit" className="btn btn-default">Create An Account</button>
				</div>
			</div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
	register: user => dispatch(register(user)),
	showAlert: (text, status) => dispatch(showAlert(text, status))
});

export default withRouter( connect(null, mapDispatchToProps)(Register) );