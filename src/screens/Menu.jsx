import React, { Component } from 'react';
import sandwich from '../images/sandwich.png';
import burger from '../images/Burger.jpg';
import ff from '../images/french fries.jpg';
import dalgona from '../images/dalgona.jpg';
import cof from '../images/coffee.jpg';
import tea from '../images/tea.jpg';
import shake from '../images/chocolate milk shake.jpg';
import Sam from '../images/Samosa.jpg';
import pastry from '../images/pastries.jpg';
import back from '../images/6.jpg';


class Menu extends Component{
    render(){
      return(
          <div style={{paddingBottom:"50px"}}>
             
             
  <title>Cafeteria | Menu</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="newcss.css" />
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet"></link>
  <div className="content">
    <div className="container-fluid bg-black">
      <div>
        <img src={back}/>
     <h1 style={{color: '#e8270b', marginBottom: 0, fontFamily: '"Dancing Script", cursive', textDecoration: 'none'}}>Menu</h1>
        <p className="text-center" style={{color: 'green'}}>We have the best Food for you. No need to hunt around, we have all in one place.</p>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">Cheese Sandwich</div>
            <div className="panel-body"><img src={sandwich} className="img-responsive " alt="Food" /></div>
            <div className="panel-footer">
              <h4 className="p-bold">Veg Sandwich</h4>
              <p>Get yourself a yummy Sandwich with a tinge of cheese</p>
              <p className="p-bold">Price : 350/-</p>
              <a href="./CheckOut" name="add" value="add" className="btn btn-block btn-primary">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">Burger</div>
            <div className="panel-body"><img src={burger} className="img-responsive " alt="Food" /></div>
            <div className="panel-footer">
              <h4 className="p-bold">Tangy Burger</h4>
              <p>Order this tangy burger and get blessed with a smile</p>
              <p className="p-bold">Price : 400/-</p>
              <a href="./CheckOut" name="add" value="add" className="btn btn-block btn-primary">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">French Fries</div>
            <div className="panel-body"><img src={ff} className="img-responsive" alt="Food" /></div>
            <div className="panel-footer">
              <h4 className="p-bold">Frenchy frees</h4>
              <p>Bonjour! What about these Frenchy fries to lift your mood today?</p>
              <p className="p-bold">Price : 100/-</p>
              <a href="./CheckOut" name="add" value="add" className="btn btn-block btn-primary">Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">Lockdown Queen</div>
            <div className="panel-body"><img src={dalgona} className="img-responsive phone" alt="Phone" /></div>
            <div className="panel-footer">
              <h4 className="p-bold">Dalgona Coffee</h4>
              <p>Enough of those Lockdown tweets,give yourself this Dalgona treat </p>
              <p className="p-bold">Price : 600/-</p>
              <a href="./CheckOut" name="add" value="add" className="btn btn-block btn-primary">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">Esty testy</div>
            <div className="panel-body"><img src={cof} className="img-responsive" alt="Food" /></div>
            <div className="panel-footer">
              <h4 className="p-bold">Espresso</h4>
              <p>Get Delighted with the taste of Espresso and enjoy with music</p>
              <p className="p-bold">Price : 400/-</p>
              <a href="./CheckOut" name="add" value="add" className="btn btn-block btn-primary">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">Masala Chai</div>
            <div className="panel-body"><img src={tea} className="img-responsive" alt="Food" /></div>
            <div className="panel-footer">
              <h4 className="p-bold">Tea</h4>
              <p>You can never say No to every Hindustani's favourite,EK CUP CHAI!</p>
              <p className="p-bold">Price : 50/-</p>
              <a href="./CheckOut" name="add" value="add" className="btn btn-block btn-primary">Order Now</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">Milky Shake</div>
            <div className="panel-body"><img src={shake} className="img-responsive" alt="Food" /></div>
            <div className="panel-footer">
              <h4 className="p-bold">Chocolate Milk Shake</h4>
              <p>Get DElighted with the wonderful Chocolate Milk Shake</p>
              <p className="p-bold">Price : 400/-</p>
              <a href="./CheckOut" name="add" value="add" className="btn btn-block btn-primary">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">Pastry</div>
            <div className="panel-body"><img src={pastry} className="img-responsive phone" alt="Phone" /></div>
            <div className="panel-footer">
              <h4 className="p-bold">Cream Pastry</h4>
              <p>Yum Pastries on the floor,You cannot go without bringing it to door</p>
              <p className="p-bold">Price : 700/-</p>
              <a href="./CheckOut" name="add" value="add" className="btn btn-block btn-primary">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">Samosa</div>
            <div className="panel-body"><img src={Sam} className="img-responsive phone" alt="Phone" /></div>
            <div className="panel-footer">
              <h4 className="p-bold">Ek Plate Samosa</h4>
              <p>You cannot deny this one.EK SAMOSA TO BANTA HAI YAAR!</p>
              <p className="p-bold">Price : 25/-</p>
              <a href="./CheckOut" name="add" value="add" className="btn btn-block btn-primary">Order Now</a>
            </div>
          </div>
        </div>
      </div>
      
            </div>
          </div>
        </div>
      );
    }
  }
  export default Menu;