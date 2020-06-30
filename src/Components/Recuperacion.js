import React from 'react';
class Olvido extends React.Component {

render(){
    return(
		<div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Ingresa tu Correo</h3>
            </div>
          <div className="card-body">
            <form>
            
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-at"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="Correo"/>
              </div>

              <div className="form-group">
                <input type="submit" value="Enviar" className="btn float-right login_btn"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Olvido;