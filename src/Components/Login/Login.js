import React from 'react';
import '../../css/Principal/Estilos.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class Login extends React.Component {
	

render(){
    return(
		<div>
			<body className="animsition">
				<div className="page-wrapper">
					<div className="page-content--bge5">
						<div className="container">
							<div className="login-wrap">
								<div className="login-content">
									<div className="login-logo">
										<a href="index.html">
											<img src="/Img/Logo.ico" alt="Oficium"></img>
										</a>
									</div>
									<div className="login-form">
										<form action="" method="post">
											<div className="form-group">
												<label>Email Address</label>
												<input className="au-input au-input--full" type="email" name="email" placeholder="Email"></input>
											</div>

											<div className="form-group">
												<label>Password</label>
												<input className="au-input au-input--full" type="password" name="password" placeholder="Password"></input>
											</div>

											<div className="login-checkbox">
												<label>
													<input type="checkbox" name="remember"/>Remember Me
												</label>
												<label>
													<a href="index.html">Forgotten Password?</a>
												</label>
											</div>
											<button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
											<div className="social-login-content">
												<div className="social-button">
													<button className="au-btn au-btn--block au-btn--blue m-b-20">sign in with facebook</button>
													<button className="au-btn au-btn--block au-btn--blue2">sign in with twitter</button>
												</div>
											</div>
										</form>
										<div className="register-link">
											<p>
												Don't you have account?
												<a href="index.html">Sign Up Here</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</div>
    )
	}
}

export default Login;