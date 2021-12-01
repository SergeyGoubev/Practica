import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import validate from '../../utils/validate';
import { login } from '../../store/actions/auth';
import { showAlert } from '../../store/actions/app';

class Login extends Component {
	state = {
		values: {
			name: '',
			password: ''
		},
		errors: {
			name: false,
			password: false
		}
	}

	loginHandler = e => {
		e.preventDefault();

		const newErrors = validate('login', this.state.values);

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
			<div className="col-sm-4 col-sm-offset-1">
				<div className="login-form">
					<h2><b>Registered Customers</b></h2>
					<p>If you have an account, sign in with your email address.</p>
					<form onSubmit={this.loginHandler}>
						<p><b>Email <font color="red">*</font></b></p>
						<input
							name="name"
							type="text"
							placeholder="Email"
							value={this.state.values.email}
							onChange={this.changeHandler}
						/>
						{this.state.errors.name && <span className="invalid">{this.state.errors.name}</span>}
						<p><b>Password <font color="red">*</font></b></p>
						<input
							name="password"
							type="password"
							placeholder="Password"
							value={this.state.values.password}
							onChange={this.changeHandler}
						/>
						{this.state.errors.password && <span className="invalid">{this.state.errors.password}</span>}
						<button type="submit" className="btn btn-default">Sing In</button>
						<a className='forgot_password'>Forgot Your Password?</a>
					</form>
				</div>
			</div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
	login: username => dispatch(login(username)),
	showAlert: (text, status) => dispatch(showAlert(text, status))
});

export default withRouter( connect(null, mapDispatchToProps)(Login) );