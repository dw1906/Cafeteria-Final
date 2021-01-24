import React from 'react';
import register from '../images/register.jpg';
class Login extends React.Component {
    render(){
	return (
	<div className="h-100 center pt3 pb6">

<div className="ml4 pv4 mid-gray sans-serif">
<div className="w-90 w-80-m w-50-l center cf cover wrap bg-center shadow-1 bg-light-gray" style={{ backgroundImage:`url(${register})`}}>
        <div className="w-80 w-70-m w-60-l fr bg-white">
            <header className="pa3 bb b--light-gray relative">
                <h1 className="b ma0 f3">Log in</h1>
            </header>
            <form id="register-form" onSubmit={this.handleSubmit} action="" className="ph3 pt3 pb4 f7">
                <div class="mb3">
                    <label for="" className="db ttu b lh-copy">Employee Id</label>
                    <input name="id" type="text" required="true"  onChange={this.handleId} className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                </div>
                <div class="mb4">
                    <label for="" className="db ttu b lh-copy">Password</label>
                    <input name="password" required="true"  type="password" onChange={this.handlePassword} className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                </div>
                <div class="mb3 tc f6">
                    Don't have an account? <a href="/register" className="blue ph1 pointer">Register!</a>
                </div>
                <div class="tc">
                <a className="f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="./c/home">Login</a>
          </div>
            </form>
        </div>
    </div>
</div>

</div>
        );
    }
}

export default Login;