import React, {Component} from 'react';
class Cuenta extends Component {
  render(){
    return(
      <div className="d-flex justify-content-center h-100">
          <div className="card">
          <div className="card-header">
            <h3>Regitra tus Datos</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Nombres"/>
              </div>	

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="far fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Apellidos"/>
              </div>
              

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-at"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="Correo"/>
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="Contraseña"/>
              </div>
            
              <div className="form-group">
                <input type="submit" value="Registrarme" className="btn float-right login_btn"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Cuenta;