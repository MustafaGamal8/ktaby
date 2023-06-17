import React, { Component } from 'react';
import '../css/loding.css'

class Loding extends Component {
    state = {  } 
    render() { 
        return (
            <div className='background'>
                <div className="loader">
                  <div className="circle one"></div>
                  <div className="circle two"></div>
                  <div className="circle three"></div>
                </div>
            </div>
        );
    }
}
 
export default Loding;