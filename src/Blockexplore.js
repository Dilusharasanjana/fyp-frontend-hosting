import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from "axios";
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';




const App = () => {

  useEffect(() => {axios
    .get("https://rest-api-thiwanka.herokuapp.com/blockchain")
    .then((response) =>{setData({
      columns:initialData.columns,
      rows:response.data
    });
  });  
  },[]);
 
  const initialData =  {  
    

  
    columns: [
      {
        label: 'BLOCKCOUNT',
        field: 'blockcount',
        sort: 'asc',
        width: 100
      },
      {
        label: 'FORGER',
        field: 'forger',
        sort: 'asc',
        width: 270
      },
      {
        label: 'IPFS HASH',
        field: 'ipfshash',
        sort: 'asc',
        width: 200
      },
      {
        label: 'LAST HASH',
        field: 'lasthash',
        sort: 'asc',
        width: 100
      },
      {
        label: 'SIGNATURE',
        field: 'signature',
        sort: 'asc',
        width: 100
      },
      {
        label: 'TIMESTAMP',
        field: 'timestamp',
        sort: 'asc',
        width: 100
      },
      {
        label: 'TRANSACTIONS',
        field: 'addBtn',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        blockcount: 'xxxxx',
        forger: 'xxxxx',
        ipfshash: 'xxxxx',
        lasthash: 'xxxxx',
        signature: 'xxxxx',
        timestamp: 'xxxxx',
        addBtn : <Link to="/transaction"><button type="button" class="btn-md  btn-outline-primary align-middle" data-mdb-ripple-color="dark">transactions </button></Link>,


      },
      
     
    ]
    
  };
const [data,setData]=useState(initialData)

  return (
    
       
     




      
          <div class=" container   p-3 mt-4 ">
            <div class="card shadow-lg  rounded-4  p-5 ">
            
                
                  <div class="col-lg text-center headgd ">
                    
                    <h1><b>
                      BLOCK EXPLORE
                      </b></h1>
                  </div>
                  <br></br>
                  
               
              
              
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    </div>
    </div>
  
    
    
  );
}

export default App;