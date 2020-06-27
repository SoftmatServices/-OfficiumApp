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
              <label> Nombres: 
                <input type="text" className="form-control" placeholder="Nombres"/>
              </label>	

              <label> Apellidos: 
                <input type="text" className="form-control" placeholder="Apellidos"/>
              </label>

              <label> Correo: 
                <input type="password" className="form-control" placeholder="Correo"/>
              </label>

              <label> Contraseña: 
                <input type="password" className="form-control" placeholder="Contraseña"/>
              </label>
            
              <div className="form-group">
                <input type="submit" value="Registrarme" className="btn float-right login_btn"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cuenta;