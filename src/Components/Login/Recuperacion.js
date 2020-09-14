import React from 'react';
import '../../css/Principal/Estilos.css';
class Recuperacion extends React.Component {

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
                      <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">submit</button>
                    </form>
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

export default Recuperacion;