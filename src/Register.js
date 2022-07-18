

import React from "react";
import axios from "axios";
import Map from 'devextreme-react/map';
import Mp from './map';
import { Link } from 'react-router-dom';



import { Redirect, withRouter } from "react-router-dom";

class Register extends React.Component {
  

  
    constructor(props) {
      super(props);
      this.state = {
        fullName: "",
        id: 0,
        sdrMode: "",
        servicePro: "",
        lat: "",
        lng: "",
       
      };
      this.handleChange = this.handleChange.bind(this);
      this.Reg = this.Reg.bind(this);
    }

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    Reg = () => {
      axios
        .post(
          window.$API_SERVER + "",
          {
            FullName: this.state.fullName,
            ID: parseInt(this.state.id),
            SDRMode: parseInt(this.state.sdrMode),
            ServicePro: this.state.servicePro,
            Lat: parseInt(this.state.lat),
            Lng: parseInt(this.state.lng),
            
          },
          
        )
        .then((json) => {
          console.log(json.data);
        });
    };
    render() {
    return (
      <div class=" mt-5 " >
        
          <div class=" container ">
            <div class="card shadow-lg    rounded-5  ">
              <div class="card-body   ">
              <br></br>
                <h1 class="card-title   text-dark text-center headgd ">
                  <b>
                  Registration Form
                  </b>
                </h1>
                <br></br>
                <div class="card-deck ">
                  <div class=" col-lg-6 col-mb-6 col-sm-6  ">
                    

                    <div class="card-body mt-2 "></div>
                    
                    <form class="p-3">
                      <div class="form-inline ">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          Full Name&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            name="fullName"
                            placeholder="enter full name"
                            onChange={this.handleChange}
                            value={this.state.fullName}
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div class="form-inline">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          ID Number&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            pattern="[0-9]*"
                            name="id"
                            placeholder="enter id number"
                            onChange={this.handleChange}
                            value={this.state.id}
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div class="form-inline">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          SDR Model&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            name="sdrMode"
                            placeholder="enter SDR model"
                            onChange={this.handleChange}
                            value={this.state.sdrMode}
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div class="form-inline">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          Service Provider&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            name="servicePro"
                            placeholder="enter service provider"
                            onChange={this.handleChange}
                            value={this.state.servicePro}
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      
                      <div class="form-inline">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          Location&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            name="lat"
                            placeholder="Latitude"
                            onChange={this.handleChange}
                            value={this.state.Latitude}
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div class="form-inline">
                        <p class="col-lg-5 col-mb-4 col-form-label; h5">
                          Location&nbsp;:&nbsp;
                        </p>

                        <div class="col-lg-6">
                          <input
                            class="form"
                            type="text"
                            name="lng"
                            placeholder="Longitude"
                            onChange={this.handleChange}
                            value={this.state.Longitude}
                            required="required"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div class="form-inline p-2">
                    <a href="/key" class="btn btn-lg btn-primary active"  onClick={this.Reg}>register</a>
                        
                      </div>
                    </form>
                    
                  </div>
                  
                  <div class ="col-lg-5 col-mb-4 h5 mt-5" >
                  <p >
                          Location&nbsp;:&nbsp;
                        </p>
                        
                  {<Mp />}
                  {/* <img src="/registration.png" class="img-fluid rounded  " alt="Responsive image"></img>  */}
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
                 
       
    );
  }
}

export default Register;

