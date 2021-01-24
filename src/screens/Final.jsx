import React from 'react';
import '../css_files/Popup.css';
import check from '../images/check.png'
import hurry from '../images/hurry.jpeg'
class Final extends React.Component{
    render(){
        return(
            <div style={{background: "linear-gradient(215deg, rgba(185,220,021,021), rgba(255,110,410,1))"}}>
            <div className="h-120 center pt3 pb6">
                <div className="ml4 pv4 mid-grey sans-serif ">
                <div className="w-90 w-80-m w-50-l pt5 center cf cover wrap bg-center shadow-1 bg-light-white">
                        <div class="tc mt-40 mb4 mt2 pb5">
                            <div style={{}}>
                            <h1>ORDER CONFIRMED</h1>
                            <h3>Thank You !!!</h3>
                            <h3>You may collect your order in half an hour </h3>
                            </div>
                        <img src={hurry} class="center" /><br/><br/><br/><br/>
                        <a  href="/login"  className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow">Got It !!</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        }
}
export default Final;