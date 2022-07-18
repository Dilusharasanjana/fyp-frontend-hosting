import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const Login = () => {
  return (
    <div class=" mt-5 " >
        
          <div class=" container p-5 ">
            <div class="card shadow-lg p-5   rounded-5  ">
    <MDBContainer>
      <MDBRow>
      <h1 class="card-title   text-dark text-center headgd ">
                  <b>
                  Sign In
                  </b>
                </h1>
                
        <MDBCol md="6">
        <br></br>
      
          <form>
          <br></br>
            <div className="grey-text">
              <MDBInput
                label="Type your username"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />

            </div>
            <div class="col-sm-1 text-center"></div>
            <div class="col-sm-6">
              <a href="/login" class="btn btn-md btn-primary active" >login</a>
              </div>
          </form>
        </MDBCol>
        <MDBCol md="2"></MDBCol>
       
        <MDBCol md="4">
            
            <img src="registration.png" alt="thumbnail" className="img-fluid " /></MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </div></div>
  );
};

export default Login;