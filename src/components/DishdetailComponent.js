import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component{

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
            return( 
                <div></div>
            );
        }
    }

    /*Second card showing second part of dish information...*/
    renderComments(){

        return (
            <div>
               {this.props.comments}
            </div>
        );
    }

    render(){
        //console.log(this.props.comments);
        const comentarios = this.props.comments.map( a => console.log(a) );

        return(
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dishes)}
            </div>       
        );
    }

}

export default DishDetail;