

import './App.css';
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBListGroup, MDBListGroupItem,
  MDBCol, MDBRow, MDBFooter
} from 'mdb-react-ui-kit';

import SidebarMenu from 'react-bootstrap-sidebar-menu';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Blockexplore from "./Blockexplore";
import Transaction from "./Transaction";
import Register from "./Register";
import AppNew from "./test/AppNew";
import Key from "./Key";
import Err from "./error";
import Tab from "./table";
import Mp from "./map";
import Login from "./Login";
import demo from "./demo";
import Welcome from './welcome';


const App=()=>{
  const rootElement = document.getElementById("root");
  const [showBasic, setShowBasic] = useState(false);
  return(
    
    <div id="App-back" class=" p-3  ">
      <MDBNavbar expand='lg' light bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/welcome'><h2 class="card-title   text-light headgd "><b>CSX_BC</b></h2></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          &nbsp;&nbsp;
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/Register'>
              <p class="card-title   text-light headgd ">
                  
                  Registration
                  </p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Blockexplore'><p class="card-title   text-light headgd ">
                  
                  Blocks
                  </p></MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Transaction'><p class="card-title   text-light headgd ">
                  
                  Transactions
                  </p></MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarItem>

            
          </MDBNavbarNav>

          <form className='d-flex  w-auto'>
            
            <a href="/login" class="btn btn-md btn-primary active" >login</a>
            <a href="/registration" class="btn btn-md btn-primary active"  >register</a>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    
    
      
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="blockexplore" element={<Blockexplore />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="register" element={<Register />} />
        <Route path="app" element={<AppNew/>}/>
        <Route path="key" element={<Key/>}/>
        <Route path="err" element={<Err/>}/>
        <Route path="tab" element={<Tab/>}/>
        <Route path="map" element={<Mp/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="welcome" element={<Welcome/>}/>
        
      </Routes>
    </BrowserRouter>

    </div>
    
  );
}
export default App;