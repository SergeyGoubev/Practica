import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import logo from '../../assets/images/home/logo.png';
import {toggleCurrency} from '../../store/actions/app';
import {logout} from '../../store/actions/auth';

class Header extends Component {
	state = {
		isOpenChoiceCurrency: false
	}

  render() {
    return (
      <header id="header">
				<div className="header_top">
					<div className="container">
						<div className="row">
							<div class="col-sm-3">
								<div className="timeinfo">
									<ul className="nav nav-pills">
										<li><Link to="/"><i></i><font color="grey">Mon-Thu:</font>  9:00 AM - 5:30 PM ˅</Link></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-6">
								<div className="contactinfo">
										<ul className="nav nav-pills">
											<li><Link to="/"><i></i><font color="grey">Visit our showroom in 1234 Street Adress City Address, 1234</font></Link></li>
											<li><Link to="/"><i></i><u>Contact Us</u></Link></li>
										</ul>
								</div>
							</div>
							<div class="col-sm-auto">
								<div className="social-icons pull-right">
									<ul className="nav navbar-nav">
										<li><Link to="#"><i className= "fa fa-phone"></i>Call Us: (00) 1234 5678</Link></li>
										<li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
										<li><Link to="/"><i className="fa fa-instagram"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="header-middle">
					<div className="container">
						<div className="row">
							<div className="col-sm-2">
								<div className="logo pull-left">
								<Link to="/"><img src={logo} alt="" /></Link>
								</div>
							</div>
							<div className="col-sm-auto">
								<div className="shop-menu pull-left">
									<ul className="nav navbar-nav">
										<li className="fa"><a href="#">Laptops</a></li>
										<li className="fa"><a href="#">Desktop PCs</a></li>
										<li className="fa"><a href="#">Networking Devices</a></li>
										<li className="fa"><a href="#">Printers & Scanners</a></li>
										<li className="fa"><a href="#">PC Parts</a></li>
										<li className="fa"><a href="#">All Other Products</a></li>
										<li className="fa"><a href="#">Repairs</a></li>
										<li className="fa"><button className="our_deals">Our Deals</button></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-auto">
								<div className="shop-menu pull-right">
									<ul className="nav navbar-nav">
										<li><NavLink exact to="/"><i className="fa fa-search"></i></NavLink></li>
										<li><NavLink to="/cart"><i className="fa fa-shopping-cart"></i></NavLink></li>
										{this.props.isAuth ? (
											<Fragment>
												<li><div><i className="fa fa-user"></i>{this.props.username}</div></li>
												<li onClick={this.props.logout}><div><i className="fa fa-sign-in"></i>Logout</div></li>
											</Fragment>
										) : (
											<li><NavLink to="/auth"><i className="fa fa-sign-in"></i>Login</NavLink></li>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
    );
  }
}

const mapStateToProps = state => ({
	currencies: state.app.currencies,
	currentCurrency: state.app.currentCurrency,
	isAuth: state.auth.isAuth,
	username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
	toggleCurrency: currencyName => dispatch(toggleCurrency(currencyName)),
	logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

