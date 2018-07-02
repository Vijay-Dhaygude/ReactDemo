import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

import Table2 from './components/Table2';
import Todos from './components/Todos';
import Datagrid from './components/Datagrid';
import data from './mockdata/tdata.json';
import Accordian from './components/Accordian';
import Charts from './components/Highchart'



class App extends Component {
constructor(){
  super();
  this.state = {
    todos:[]
  }
}
getTodos(){
  $.ajax({
    url:"https://jsonplaceholder.typicode.com/todos",
    dataType:'json', 
    cache:false,
    success:function(data){
      this.setState({todos:data},function(){
        console.log(this.state);
      });
    }.bind(this),
    error:function(xhr,status,err){
      console.log(err);
    }
  });
}

componentWillMount(){
  this.getTodos();
}
/*componentDidMount(){
  this.getTodos();
}*/

  render() {
    return (
      <div className="App">
        
        <div id="navbar">          
          <a className="acnts" href="#Accounts">Accounts</a>
          <a href="#Cards">Cards</a>
          <a href="#Payments">Payments</a>
          <a href="#Statements">Statements</a>
          </div>
          <hr/>
          <header className="App-header">
          <div className="acntName">Vijay Dhaygude <span className="ssn">50711717470</span></div>
        </header>
          <div id="accnt">
              
              
             
          </div>
          <hr />
              <Charts />
              <div id="Cards"> 
                <Accordian/>
                </div>
                <div id="Payments">
                   <Datagrid />
                 </div>

             <hr />
             <div id="Statements">
             <Todos todos={this.state.todos} />
             </div>

             <div id="top">
             <a href="#accnt">^Top</a>
             </div>

             <div className="fotter">
              @ Designed & developed by Vijay Dhaygude
             </div>
            
      </div>
    );
  }
}

export default App;


