import React, { Component, useState, useEffect  } from "react";
import axios from "axios";

import { Redirect, withRouter } from "react-router-dom";

import Moment from "moment";

const Transaction = () => {

  const[data,setData]=useState({})

  useEffect(() => {axios
    .get("https://rest-api-thiwanka.herokuapp.com/blockchain")
    .then((response) =>{setData(response.data);
  });  
  },[]);

  const listItems = data.map((number) =>
    <li>{number}</li>
  );



  return (
    
    <div >

      
      
        <div class=" container p-3 mt-5  ">
            <div class=" card shadow-lg  p-5 rounded-4  ">
            
              <h1 class="card-title   text-dark text-center headgd ">
                  <b>
                  Block&nbsp; {data.blockCount}
                  </b></h1>
                  <br></br><br></br>

                  <ul class=" list-group-flush p-2">
  
  <li class="list-group-item">FORGER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; {data.forger}</li>
  <li class="list-group-item">IPFS HASH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{data.ipfs_hash}</li>
  <li class="list-group-item">LAST HASH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{data.lastHash}</li>
  <li class="list-group-item">LAST HASH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{data.merkel_hash}</li>
  <li class="list-group-item">SIGNATURE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{data.signature}</li>
  <li class="list-group-item">TIME STAMP &nbsp;&nbsp;&nbsp;:&nbsp;{data.timestamp}</li>
</ul>

<br></br>

<h3 class="card-title   p-3 text-dark text-left headgd ">
                  <b>
                  Transactions 
                  </b></h3>
              
                
                <div class="card-body  bg-light mt-3 rounded-4">
                  <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p>
                      <b>Amount </b>
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <p>
                      <b>: &nbsp; {data.amount}</b>
                    </p>
                  </div>
                  </div>
                  <div class="row col-lg-9">
                  <div class="col-lg-6">
                  <p><b>Detection Probability &nbsp;&nbsp;&nbsp;&nbsp; :</b></p>
                  </div>
                  <div class="col-lg-6">
                  <p><b> &nbsp; {data.detection_probability}</b></p>
                  </div>
                  </div>
                  <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p>
                      <b>Hash Stake 
                        </b>
                    </p>
                    </div>
                  <div class="col-lg-6">
                  <p><b>
                    : &nbsp; {data.hash_stake}
                    </b></p>
                    </div>
                    </div>
                    <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p><b>ID </b></p>
                  </div>
                  <div class="col-lg-6">
                    <p><b>: &nbsp; {data.id}</b></p>
                  </div>
                  </div>
                  <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p><b>Node IPFS Hash </b></p>
                  </div>
                  <div class="col-lg-6">
                    <p><b> : &nbsp; {data.node_ipfs_hash} </b></p>
                  </div>
                  </div>
                  <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p><b>Reciever Public Key </b></p>
                  </div>
                  <div class="col-lg-6">
                    <p><b>: &nbsp; {data.recieverPublicKey}</b></p>
                  </div>
                  </div>
                  <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p><b>Sender Public Key </b></p>
                  </div>
                  <div class="col-lg-6">
                    <p><b>: &nbsp; {data.senderPublicKey}</b></p>
                  </div>
                  </div>
                  <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p><b>Signature </b></p>
                  </div>
                  <div class="col-lg-6">
                    <p><b>: &nbsp; {data.signature}</b></p>
                  </div>
                  </div>
                  <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p><b>Similarity Score </b></p>
                  </div>
                  <div class="col-lg-6">
                    <p><b>: &nbsp; {data.similarity_score}</b></p>
                  </div>
                  </div>
                  <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p><b>Timestamp </b></p>
                  </div>
                  <div class="col-lg-6">
                    <p><b>: &nbsp; {data.timestamp}</b></p>
                  </div>
                  </div>
                  <div class="row col-lg-9">
                  <div class="col-lg-3">
                    <p><b>Type </b></p>
                  </div>
                  <div class="col-lg-6">
                    <p><b>: &nbsp; {data.type}</b></p>
                  </div>
                  </div>

                  
                  </div>
                  <br></br>
                  <br></br>
              </div>
            
          </div>
          </div>
          
          
    
    
          
  );
};

export default Transaction;