import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import Recipes from './components/Recipes';
import ShoppingList from './components/ShoppingList';
import { me, getRecipes } from './store';
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.auth.id !== this.props.auth.id) {
  //     this.props.loadInitialData();
  //   }
  //   if (prevProps.orderItems.length !== this.props.orderItems.length) {
  //     this.props.loadInitialData();
  //   }
  // }

  render() {
    const { isLoggedIn } = this.props;

    console.log('PROPS', this.props);

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/shoppinglist" component={ShoppingList} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    ...state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
      dispatch(getRecipes());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
