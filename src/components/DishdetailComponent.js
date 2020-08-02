import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            coment: this.props.comments 
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
            return( 
                <div></div>
            );
        }
    }

    /*Second card showing second part of dish information...*/
    renderComments(comentarios){

        return (
            <div>
                {comentarios}
            </div>
        );
    }

    render(){
        
        //console.log(this.props.comments);
        const comentarios = this.state.coment.map( (variable) => 
            {
            return (
                <div key={variable.id}>
                    <p>{variable.comment}</p>
                    <p><span>{"-- "}</span>{variable.author}</p>
                </div>
            );    
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <div>
                    {this.renderDish(this.props.dishes)}
                </div>
                <div>
                    <h4>Comments</h4>             
                    {this.renderComments(comentarios)}
                </div>           
            </div>      
        );
    }

}

DishDetail.defaultProps = {
    coment: []
}

export default DishDetail;