import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './componnets/Header';
import NuevaCita from './componnets/NuevaCita';
import ListaCitas from './componnets/ListaCitas'


class App extends Component {
  state = {
    citas: []
  }

  //Cuando la app carga
  componentDidMount(){
    const citasLS =localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)//convierte en un arreglo de objetos
      })
    }

  }

  //cuando eliminamos o agregamos una nueva cita
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }
  crearNuevaCita = datos => {
    //copiar el state actual y agrega la nueva cita
    const citas = [...this.state.citas, datos];

    //agregar el nuevo state
    this.setState({
      citas
    })
  }
  //elimina las citas del state
  eliminarCita = id =>{
    //tomar una copia del state
    const citasActuales = [...this.state.citas];

    //utilizar filter para sacar el elemento "id" del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);

    //actualizar state
    this.setState({
      citas
    })
  }
  render() {
    return (
      <div className="container">
        <Header 
            titulo = 'Administrador Paciente Veterinaria'
        />
        <div className="row">
            <div className="col-md-10 mx-auto">
                <NuevaCita 
                  crearNuevaCita= {this.crearNuevaCita}
                />
            </div>
            <div className="mt-5 col-md-10 mx-auto">
              <ListaCitas
                citas={this.state.citas}
                eliminarCita={this.eliminarCita}
              />
            </div>
        </div>
      </div>
    )
  }
}


export default App;
