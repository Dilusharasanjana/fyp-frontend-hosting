import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
    return(

        <>
        <div className='post' ref={ref}></div>
        
        </>
    );
}