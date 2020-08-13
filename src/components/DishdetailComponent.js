import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comentarios}
            </div>
        );
    }

    dating(param){
        var dateToDate = new Date(param);
        var month = dateToDate.toLocaleString('default', { month: 'short' });
        var year = dateToDate.toLocaleString('default', { year: 'numeric' });
        return `${month}, ${year}`;
    }

    render(){
        
        //console.log(this.props.comments);
        const comentarios = this.state.coment.map( (variable) => 
            {
            return (
                <div key={variable.id} className="list-unstyled">
                    <p>{variable.comment}</p>
                    <p>
                        <span>{"-- "}</span>
                        {variable.author}
                        <span>{", "}</span>
                        <span>{this.dating(variable.date)}</span>
                    </p>
                </div>
            );    
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>

                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>             
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