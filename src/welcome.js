import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



const Welcome = (props) => {



  return (
    <div>
        
        
          <div class=" container  p-5 mt-5 ">
            <div class="card   p-3 mt-5">
              <div class="card-body   ">
              <h1 class="card-title p-3 text-success text-center headgd ">
                  <b>
                  Welcome to CSX_BC
                  </b>
                </h1>
                <br></br>
<div class="card-deck">
<div class="card  text-dark  ">
                  
                  <div class="card-body mt-2 ">
                    
                      
                    <div class="form-inline ">
                      <p class="col-sm-12 col-form-label; h5 text-center">
                        New to System
                      </p>
<br></br>

<br></br><br></br><div class="col-sm-3"></div>
<a href="/register" class="btn btn-lg btn-primary col-sm-6 active"  >register</a>
                    
                    </div>
                    
                  </div>
                  
                  
                </div>

                <div class="card  text-dark  ">
                  
                  <div class="card-body mt-2 ">
                    
                      
                    <div class="form-inline ">
                      <p class="col-sm-12 col-form-label; h5 text-center">
                        Already Registered
                      </p>
                      <br></br>

<br></br><br></br><div class="col-sm-3"></div>
<a href="/login" class="btn btn-lg btn-primary col-sm-6 active"  >login</a>
                    </div>
                    
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      
  );
          
       
        
                  
 
};

export default Welcome;