import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, 
  ModalBody, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors, Field } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommentForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment);
    }

    render(){
        return(
            <>         
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg"></span>Submit Comment
            </Button>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                                <Label for=".rating" md={3}>Rating</Label>
                                <Col md={12}>
                                <Control.select model=".rating" id="rating" name="rating"
                                    placeholder="Rating"
                                    className="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                </Control.select>
                                </Col>
                        </Row>

                        <Row className="form-group">
                                <Label for=".yourname" md={3}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={
                                            { required, minLength: minLength(3), maxLength: maxLength(15) }}
                                       />
                                    <Errors 
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label for=".comment" md={3}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"                                     
                                        className="form-control"
                                        rows="6"
                                       />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 0}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>

                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

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
                <FadeTransform in 
                    transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src={ baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </FadeTransform>
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
    renderComments(comentarios,postComment,dishId){

        return (
            <Fade in>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comentarios}
                <CommentForm dishId={dishId} postComment={postComment}/>
            </div>
            </Fade>
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

        if (this.props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess){
            return(
            <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );    
        }

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
                    <Stagger in>           
                    {this.renderComments(comentarios,this.props.postComment,this.props.dish.id)}
                    </Stagger>
                </div>           
            </div>      
        );
    }

}

DishDetail.defaultProps = {
    coment: []
}

export default DishDetail;