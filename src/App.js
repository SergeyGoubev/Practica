import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Auth from './pages/Auth';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

import Header from './components/App/Header';
import Alert from './components/App/Alert';

class App extends Component {
  render() {
    return (
      <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>

      {this.props.alert.isOpen && (
      	<Alert
      		text={this.props.alert.text}
      		status={this.props.alert.status}
      	/>
      )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
	alert: state.app.alert
});


export default connect(mapStateToProps)(App);