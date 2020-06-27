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
              <label> Nombre y Apellido: 
                <input type="text" className="form-control" placeholder="Nombre completo"/>
              </label>	

              <label> Correo electronico: 
                <input type="text" className="form-control" placeholder="Correo electronico"/>
              </label>

              <label> Fecha de nacimiento: 
                <input type="date" className="form-control" placeholder="Fecha den acimiento"/>
              </label>

              <label> Numero de celular: 
                <input type="number" className="form-control" placeholder="Numero de celular"/>
              </label>

              <label> Departamento: 
                <input type="text" className="form-control" placeholder="Departament"/>
              </label>

              <label> Ciudad: 
                <input type="text" className="form-control" placeholder="Ciudad"/>
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