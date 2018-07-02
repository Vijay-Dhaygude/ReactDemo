import React, { Component } from 'react';

import '../css/Accordian.css';

import $ from 'jquery';

import items from '../mockdata/items.json'

 

class Accordian extends Component {

 

    accordian(){

      $(document).ready(function($) {

      $('#accordion').find('.accordion-toggle').click(function(){

 

        $(this).next().slideToggle('fast');

 

        $(".accordion-content").not($(this).next()).slideUp('fast');

 

      });

      });

    }

 

    componentDidMount(){
      this.accordian();

    } 

 

  render() {

    return (

      <div className="Accrdn">

                <div className="accountTitle">Accounts</div>

                <div id="accordion" >

                        {
                          items.map(function(accounts,i,arr){
                            
                            <div className="accordion-toggle">AccountNumber :{accounts.accNumber}<span className="accType">{accounts.accType}</span></div>;
                                                           
                                if(accounts.Transactions)
                                { 
                                    var len = accounts.Transactions.length;
                                    console.log( 'cnt ' + accounts.Transactions.length);
                                  for (i = 0; i < len; i++) { 
                                  <div className="accordion-content">{accounts.Transactions[i].transactionDate}-{accounts.Transactions[i].transactionAddress}<span className="trnsAmount">{accounts.Transactions[i].transactionAmount}</span>
                                    <div className="transactinMode">{accounts.Transactions[i].transactionDate}</div>
                                  </div>;
                                  }
                                }                           
                                

                            return                     

                          })

                        }
                </div>

 

      </div>

    );

  }

}

 

export default Accordian;