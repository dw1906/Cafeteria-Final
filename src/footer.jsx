import React from 'react';

class footer extends React.Component{
    render() {
      return (
        <div style={{ position:"fixed",width:"100%",margin:"0",flex:"0 0 50px",left:"0",bottom:"0",right:"0"}}>
        <footer className="pv3 ph3 ph3-m ph6-l mid-gray white" style={{background: "linear-gradient(315deg,  #461220 0%,  #461220 0%, #e0d4ae 74%)"}}>
          <small className="f6 db tc">© 2021 <b className="ttu">Cafeteria</b>., Ready to serve you</small>
          <div className="tc mt3">
            <div title="Language" className="f6 dib ph2 link mid-gray dim pointer white">Language</div>
            <div title="Terms" className="f6 dib ph2 link mid-gray dim pointer white">Terms of Use</div>
            <div title="Privacy" className="f6 dib ph2 link mid-gray dim pointer white">Privacy</div>
          </div>
        </footer>
        </div>
      );
    }
  }


  export default footer;