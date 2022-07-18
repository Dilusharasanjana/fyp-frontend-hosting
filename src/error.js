import React, { Component, useState, useEffect  } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Redirect, withRouter } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Err = () => {


  return (
    <div class=" mt-3 "  >
        
          <div class=" container col-6   p-3  ">
            <div class="card col-12  p-4  border-dark border-start-5 border-3 rounded-4 ">
              
                <h1 class="card-title p-3 text-danger text-center headgd ">
                  <b>
                  Registration Failed !!!
                  </b>
                </h1>
                
    
                  
                </div>
                    
                  </div>
                </div>
            
           
          
       
        
                  
  );
};

export default Err;