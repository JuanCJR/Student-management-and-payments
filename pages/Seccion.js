import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Table,
  Card,
  Button,
} from "react-bootstrap";
import axios from "axios";



export default class Secciones extends Component {
  
  state = {
    secciones: [],
    seccion: "",
  };
  //peticion al back para traer todos los grados
  async componentDidMount() {
    this.getSeccion();
  }

  //meto para usar la misma funcion en varios lados
  getSeccion = async () => {
    const res = await axios.get("http://localhost:4000/seccion");
    this.setState({ secciones: res.data });
  };

  //metodo que escucha lo que escribes
  onChangeSeccion = (e) => {
    this.setState({
      seccion: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/seccion", {
      seccion: this.state.seccion,
    });
    //establece el input a estado 0
    this.setState({ seccion: "" });
    //refresca la pagina
    this.getSeccion();
  };

  deleteGrado = async (id_seccion) => {
    await axios.delete("http://localhost:4000/seccion/" +id_seccion); 
    this.getSeccion();
    console.log(id_seccion)
  };
  
render() {
    return (
      <div>
        <h1 className="text-black text-center">Menu de Secciones</h1>
      
        <Container>
          <Row className="mt-4">
            <Col>
              <Card>
                <Form onSubmit={this.onSubmit}>
                  <h3>Crear Seccion</h3>
                  <input
                    type="text"
                    className="from-control"
                    value={this.state.seccion}
                    onChange={this.onChangeSeccion}
                  ></input>
                  <button type="submit" className="btn btn-outline-success">
                    Guardar
                  </button>
                </Form>
                <Card.Header className="text-center">
                  <h3>Datos</h3>
                </Card.Header>
                <Table>
                  <thead>
                    <tr>
                      <th>Grados y Años</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.secciones.length ? (
                      this.state.secciones.map((seccion) => {
                        return (
                          <tr key={seccion.id_seccion}>
                            <td>{seccion.seccion}</td>
                                <td>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => this.deleteGrado(seccion.id_seccion)}
                                  >
                                    Eliminar
                                  </button>
                                  </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center">
                          No hay secciones para el año seleccionado
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
        




        
      

     
    )
  }
}

