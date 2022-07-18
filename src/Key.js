import React, { Component, useState, useEffect  } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Redirect, withRouter } from "react-router-dom";
import Pdf from "react-to-pdf";
import { jsPDF } from "jspdf";


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const ref = React.createRef();

const Key = (props) => {

  const[data,setData]=useState({})

  useEffect(() => {axios
    .get("")
    .then((response) =>{setData(response.data);
  });  
  },[]);

  
  const printDocument=(e)=>{
    const doc = new jsPDF({
    orientation: "landscape",
    
  });
  
  
  doc.setFontSize(20);
  doc.setFont("courier","bold");
  doc.setTextColor("#000000");
  doc.setLineWidth(5);
  doc.text("Public Key :",10, 30,null, null, "left");

  doc.text("Private Key :",10, 30,null, null, "left");
  
  doc.save("two-by-four.pdf");
  }
  // const doc = new jsPDF({
  //   orientation: "landscape",
  //   unit: "in",
  //   format: [1, 2]
  // });
  
  // doc.text("Public Key : ", 1, 1);
  // doc.text("Private Key :", 1, 1);
  // doc.save("two-by-four.pdf");


  return (
    <div class=" mt-3 "  >
        
          <div class=" container col-6   p-3  ">
            <div class="card col-12  p-4  border-dark border-start-5 border-3 rounded-4 ">
              
                <h1 class="card-title p-3 text-success text-center headgd ">
                  <b>
                  Successefully Registered
                  </b>
                </h1>
                <br></br>
                <div class="card-body border-dark rounded-4 bg-light  ">
                <br></br>
                  <div class="col-lg-6">
                    <p>
                      <b>Public Key : &nbsp; {data.amount}</b>
                    </p>
                  </div>
                  <br></br>
                  <div class="col-lg-6">
                  <p><b>Private Key : &nbsp; {data.amount}</b></p>
                
                  </div>
                  <br></br>
                 <div>
                 
                  <button class="btn btn-lg btn-primary active" onClick={(e)=>printDocument(e)}>Download PDF</button>

                 
                 </div>
                  
                  
                </div>
                    
                  </div>
                </div>
            
            </div>
          
       
        
                  
  );
};

export default Key;