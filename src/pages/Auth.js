import React from 'react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

function Auth() {
  return (
		<section id="form">
			<div className='container'>
				<div className="col-sm-auto">
					<h2>Customer Login</h2>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<Login />
					<div className="col-sm-1">
					</div>
					<Register />
				</div>
			</div>
		</section>
  );
}

export default Auth;