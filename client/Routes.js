import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import Recipes from './components/Recipes';
import ShoppingList from './components/ShoppingList';
import {
  me,
  getRecipes,
  getIngredients,
  getMealPlans,
  getUsers,
} from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id) {
      this.props.loadInitialData();
    }

    if (prevProps.recipes.length !== this.props.recipes.length) {
      this.props.loadInitialData();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    console.log('recipes', this.props.recipes);
    console.log('meal plans', this.props.mealPlans);

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/shoppinglist" component={ShoppingList} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Login} />
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
      dispatch(getIngredients());
      dispatch(getMealPlans());
      dispatch(getUsers());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
