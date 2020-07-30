import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props) {
        super(props);

        this.state = { 
            selectedDish: this.props.selectedDish 
        };
    }

    /*First card showing first part of dish information...*/ 
    renderDish(dish){

        if ( dish != null ){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        {
            //console.log("NO MUESTRA NADA");
            return( 
                <div></div>
            );
        }
    }

    /*Second card showing second part of dish information...*/

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }

}

export default DishDetail;