import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES,
      };
    }

    renderDish(dish){
        if ( dish != null )
        {
            return(               
                <DishDetail dishes={dish} comments={dish.comments}/>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

  render(){

    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
        <Redirect to="/home" /> 
      </Switch>
      <Footer />
    </div>
    );
  }
  
}

export default Main;

/*
{this.renderDish(this.state.dishes.filter(
          (dish) => dish.id  === this.state.selectedDish )[0]  
        )}
*/
