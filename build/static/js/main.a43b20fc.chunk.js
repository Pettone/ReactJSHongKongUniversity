(this.webpackJsonpreactjshongkonguniversity=this.webpackJsonpreactjshongkonguniversity||[]).push([[0],{102:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=(t(99),t(100),t(101),t(102),t(19)),c=t(20),m=t(22),i=t(21),u=t(152),d=t(153),E=t(154),f=t(155),h=t(156),p=t(157),g=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinnner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading..."))},b="http://localhost:3001/",v=t(24);function N(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(g,null):n?r.a.createElement("h4",null,n):r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(h.a,null,a.designation):null,r.a.createElement(p.a,null,a.description))))}var y=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(N,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(N,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(N,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},O=t(23),w=t(158),M=t(159),L=t(160),k=t(161),j=t(162),S=t(163),C=t(164),D=t(165),F=t(179),x=t(166),A=t(167),I=t(168),T=t(169),R=t(170),_=t(171),P=t(8),q=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(O.a)(n)),n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleLogin=n.handleLogin.bind(Object(O.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+"Password: "+this.password.value+"Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(M.a,{onClick:this.toggleNav}),r.a.createElement(L.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(k.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(j.a,{navbar:!0},r.a.createElement(S.a,null,r.a.createElement(P.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"}),"Home")),r.a.createElement(S.a,null,r.a.createElement(P.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"}),"About Us")),r.a.createElement(S.a,null,r.a.createElement(P.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"}),"Menu")),r.a.createElement(S.a,null,r.a.createElement(P.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"}),"Contact Us"))),r.a.createElement(j.a,{className:"ml-auto",navbar:!0},r.a.createElement(S.a,null,r.a.createElement(C.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"}),"Login")))))),r.a.createElement(D.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(F.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(x.a,{toggle:this.toggleModal},"Login"),r.a.createElement(A.a,null,r.a.createElement(I.a,{onSubmit:this.handleLogin},r.a.createElement(T.a,null,r.a.createElement(R.a,{htmlFor:"username"},"Username"),r.a.createElement(_.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(T.a,null,r.a.createElement(R.a,{htmlFor:"password"},"Password"),r.a.createElement(_.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(T.a,{check:!0},r.a.createElement(R.a,{check:!0},r.a.createElement(_.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(C.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var H=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(P.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(P.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(P.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(P.b,{to:"/contactus"},"Contact Us")),r.a.createElement("li",null,r.a.createElement(P.b,{to:"/aboutus"},"About us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},G=t(172),Y=t(173),W=t(174);function B(e){var a=e.dish;e.onClick;return r.a.createElement(u.a,null,r.a.createElement(P.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:b+a.image,alt:a.name}),r.a.createElement(G.a,null,r.a.createElement(f.a,null,a.name))))}var U=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(B,{dish:e}))}));return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(Y.a,null,r.a.createElement(W.a,null,r.a.createElement(P.b,{to:"/home"},"Home")),r.a.createElement(W.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},K=t(175),z=t(176),J=t(10),Z=function(e){return e&&e.length},$=function(e){return function(a){return!a||a.length<=e}},Q=function(e){return function(a){return a&&a.length>=e}},V=function(e){return!isNaN(Number(e))},X=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ee=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(Y.a,null,r.a.createElement(W.a,null,r.a.createElement(P.b,{to:"/home"},"Home")),r.a.createElement(W.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(J.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{for:".firstname",md:2},"First Name"),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:Z,minLength:Q(3),maxLength:$(15)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{for:"lastname",md:2},"Last Name"),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:Z,minLength:Q(3),maxLength:$(15)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. number",className:"form-control",validators:{required:Z,minLength:Q(3),maxLength:$(15),isNumber:V}}),r.a.createElement(J.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:Z,validEmail:X}}),r.a.createElement(J.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",validEmail:"Invalid email Address"}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(z.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(R.a,{check:!0},r.a.createElement(J.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(z.a,{md:{size:3,offset:1}},r.a.createElement(J.Control.select,{model:".contactType",name:"contactType"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(z.a,{md:{size:10,offset:2}},r.a.createElement(C.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),ae=t(177),te=t(178);function ne(e){var a=e.leaderss,t=e.isLoading,n=e.errMess,l=a.map((function(e){return r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement("div",{key:e.id},r.a.createElement(ae.a,{tag:"li"},r.a.createElement(ae.a,{left:!0,middle:!0},r.a.createElement(ae.a,{object:!0,src:b+e.image,alt:e.name})),r.a.createElement(ae.a,{body:!0,className:"ml-5"},r.a.createElement(ae.a,{heading:!0},e.name),r.a.createElement("p",null,e.designation),r.a.createElement("p",null,e.description)))))}));return t?r.a.createElement(g,null):n?r.a.createElement("h4",null,n):r.a.createElement("div",null,r.a.createElement(v.Stagger,{in:!0},l))}var re=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(Y.a,null,r.a.createElement(W.a,null,r.a.createElement(P.b,{to:"/home"},"Home")),r.a.createElement(W.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(te.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(E.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(E.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(ae.a,{list:!0},r.a.createElement(ne,{leaderss:e.leaders.leaders,isLoading:e.leadersLoading,errMess:e.leadersErrMess})))))},le=function(e){return e&&e.length},se=function(e){return function(a){return!a||a.length<=e}},oe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"}),"Submit Comment"),r.a.createElement(F.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(x.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(A.a,null,r.a.createElement(J.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{for:".rating",md:3},"Rating"),r.a.createElement(z.a,{md:12},r.a.createElement(J.Control.select,{model:".rating",id:"rating",name:"rating",placeholder:"Rating",className:"form-control"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{for:".yourname",md:3},"Your Name"),r.a.createElement(z.a,{md:12},r.a.createElement(J.Control.text,{model:".yourname",id:"yourname",name:"yourname",placeholder:"Your Name",className:"form-control",validators:{required:le,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:se(15)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".yourname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{for:".comment",md:3},"Comment"),r.a.createElement(z.a,{md:12},r.a.createElement(J.Control.textarea,{model:".comment",id:"comment",name:"comment",className:"form-control",rows:"6"}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(z.a,{md:{size:10,offset:0}},r.a.createElement(C.a,{type:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component),ce=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={coment:n.props.comments},n}return Object(c.a)(t,[{key:"renderDish",value:function(e){return null!=e?r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{top:!0,src:b+e.image,alt:e.name}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,e.name),r.a.createElement(p.a,null,e.description)))):r.a.createElement("div",null)}},{key:"renderComments",value:function(e,a,t){return r.a.createElement(v.Fade,{in:!0},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),e,r.a.createElement(oe,{dishId:t,postComment:a})))}},{key:"dating",value:function(e){var a=new Date(e),t=a.toLocaleString("default",{month:"short"}),n=a.toLocaleString("default",{year:"numeric"});return"".concat(t,", ").concat(n)}},{key:"render",value:function(){var e=this,a=this.state.coment.map((function(a){return r.a.createElement("div",{key:a.id,className:"list-unstyled"},r.a.createElement("p",null,a.comment),r.a.createElement("p",null,r.a.createElement("span",null,"-- "),a.author,r.a.createElement("span",null,", "),r.a.createElement("span",null,e.dating(a.date))))}));return this.props.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):this.props.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,this.props.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(Y.a,null,r.a.createElement(W.a,null,r.a.createElement(P.b,{to:"/menu"},"Menu")),r.a.createElement(W.a,{active:!0},this.props.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,this.props.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},this.renderDish(this.props.dish)),r.a.createElement(v.Stagger,{in:!0},this.renderComments(a,this.props.postComment,this.props.dish.id))))}}]),t}(n.Component);ce.defaultProps={coment:[]};var me=ce,ie=t(11),ue=t(27),de=function(){return{type:"DISHES_LOADING"}},Ee=function(e){return{type:"DISHES_LOADING",payload:e}},fe=function(e){return{type:"ADD_DISHES",payload:e}},he=function(e){return{type:"COMMENTS_FAILED",payload:e}},pe=function(e){return{type:"ADD_COMMENTS",payload:e}},ge=function(){return{type:"PROMOS_LOADING"}},be=function(e){return{type:"PROMOS_FAILED",payload:e}},ve=function(e){return{type:"ADD_PROMOS",payload:e}},Ne=t(56),ye=t(88),Oe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement(Ne.a,null,r.a.createElement(ye.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ie.d,null,r.a.createElement(ie.b,{path:"/home",component:function(){return r.a.createElement(y,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(ie.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(U,{dishes:e.props.dishes})}}),r.a.createElement(ie.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(me,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ie.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(ee,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(ie.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(re,{leaders:e.props.leaders})}}),r.a.createElement(ie.a,{to:"/home"})))),r.a.createElement(H,null))}}]),t}(n.Component),we=Object(ie.g)(Object(ue.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},postFeedback:function(a,t,n,r,l,s,o){return e(function(e,a,t,n,r,l,s){return function(o){var c={firstname:e,lastname:a,telnum:t,email:n,agree:r,contactType:l,message:s};return c.date=(new Date).toISOString(),fetch(b+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return o({type:"ADD_FEEDBACK",payload:e})})).catch((function(e){console.log("Post Feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(a,t,n,r,l,s,o))},fetchDishes:function(){e((function(e){return e(de(!0)),fetch(b+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(fe(a))})).catch((function(a){return e(Ee(a.message))}))}))},resetFeedbackForm:function(){e(J.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(pe(a))})).catch((function(a){return e(he(a.message))}))}))},fetchPromos:function(){e((function(e){return e(ge(!0)),fetch(b+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ve(a))})).catch((function(a){return e(be(a.message))}))}))},fetchLeaders:function(){e((function(e){return e({type:"LEADERS_LOADING"}),fetch(b+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(function(e){return{type:"ADD_LEADERS",payload:e}}(a))})).catch((function(a){return e({type:"LEADERS_FAILED",payload:a.message})}))}))}}}))(Oe)),Me=(t(150),t(7)),Le=t(28),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!1,errMess:a.payload,dishes:[]});default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!1,errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!1,errMess:a.payload,comments:[]});case"ADD_COMMENT":var t=a.payload;return Object(Me.a)(Object(Me.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!1,errMess:a.payload,promotions:[]});default:return e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Me.a)(Object(Me.a)({},e),{},{isLoading:!1,errMess:a.payload,leaders:[]});default:return e}},De=t(91),Fe=t(92),xe=t.n(Fe),Ae={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Ie=Object(Le.createStore)(Object(Le.combineReducers)(Object(Me.a)({dishes:ke,comments:je,promotions:Se,leaders:Ce},Object(J.createForms)({feedback:Ae}))),Object(Le.applyMiddleware)(De.a,xe.a)),Te=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.Provider,{store:Ie},r.a.createElement(P.a,null,r.a.createElement("div",null,r.a.createElement(we,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,a,t){e.exports=t(151)}},[[94,1,2]]]);
//# sourceMappingURL=main.a43b20fc.chunk.js.map