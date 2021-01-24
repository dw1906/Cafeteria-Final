import React from 'react';
import '../css_files/home.css';
import Typical from 'react-typical'

class Home extends React.Component {
    render(){
    return(
        <div>
          <div id="content">
  <div id="banner_image">
    <div className="container">
      <center>
        <div id="banner_content">
          <h1>We are Delighted to serve you</h1>
          <p style={{ fontSize: 26 }}>Gift yourself a <Typical loop={Infinity} wrapper="b" steps={[
            'Coffee',1000,
            'Cake',1000,
            'Pizza',1000,
            'me time !',1000]}/></p>
          <br />
          <div className="ph3">
          <a className="f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" href="./menu">See Menu</a>
          </div>
          <br />
          <div className="ph3">
          <a className="f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="./register">Order Now</a>
          </div>
          <br />
          <br />
        </div>
      </center>
    </div>
  </div>
</div>
        </div>
        )
    }
}

export default Home;