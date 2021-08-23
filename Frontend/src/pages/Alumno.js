import React, { Component } from "react";
import { Container, Col, Row, Form, Table, Card } from "react-bootstrap";
import axios from "axios";

export default class Alumno extends Component {
  state = {
    seccionesSL: [],
    gradosSL: [],
    seccionesSelect: "",
    secciones:[],
    gradosSelect: "",

    cedula: "",
    PrimerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    sexo: "",
    fechaDN: "",
  };

  async componentDidMount() {
    const url1 = "http://localhost:4000/seccion";
    const url2 = "http://localhost:4000/grados";
    const secciones = await axios.get(url1);
    const grados = await axios.get(url2);

    this.setState({
      seccionesSL: secciones.data,
      gradosSL: grados.data,
    });

    // if (secciones.data.length >0) {
    //   this.setState({
    //     seccionesSL: secciones.data.map(seccion => seccion.seccion),
    //     seccionesSelect:secciones.data[0].seccion.seccion
    //   })
    //   console.log(this.state.seccionesSL)
    //   console.log(this.state.seccionesSelect)
    // }

    // if(grados.data.length > 0){
    //   this.setState({
    //     gradosSL: grados.data.map(grados => grados.grado),
    //     gradosSelect:grados.data[0].grado.grado
    //   })
    //   console.log(this.state.gradosSL)
    //   console.log(this.state.gradosSelect)
    // }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const alumno = {
      cedula: this.state.cedula,
      PrimerNombre: this.state.PrimerNombre,
      segundoNombre: this.state.segundoNombre,
      primerApellido: this.state.primerApellido,
      segundoApellido: this.state.segundoApellido,
      sexo: this.state.sexo,
      fechaDN: this.state.fechaDN,
      grado: this.state.gradosSelect,
      seccion: this.state.seccionesSelect,
    };
    const res = await axios.post("http://localhost:4000/alumno", alumno);
    console.log(res);
  };

  onImputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeGrado = async (e) => {
    let id_grado = e.target.value;
    const secciones = this.state.seccionesSL.filter(
      (s) => s.grados.id_grado === id_grado
    );
      this.setState({
      secciones: secciones,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <h1 className="text-black text-center">Menu de Alumnos</h1>

          <Row className="mt-4 ">
            <Col>
              <Card>
                <Card.Header className="text-center">
                  <h3>Crear Nuevo Alumno</h3>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={this.onSubmit}>
                    <h4 className="text-balck text-center">
                      Seleccione una Grado
                    </h4>
                    <select
                      className="form-control"
                      name="grado"
                      onChange={this.onChangeGrado}
                    >
                      <option value={null}>Seleccionar un grado..</option>

                      {this.state.gradosSL.length ? (
                        this.state.gradosSL.map((g) => (
                          <option key={g.id_grado} value={g.id_grado}>
                            {g.grado}
                          </option>
                        ))
                      ) : (
                        <option></option>
                      )}
                    </select>

                    <h4 className="text-balck text-center">
                      Seleccione una Seccion
                    </h4>
                    <select
                      className="form-control"
                      name="seccion"
                      onChange={this.onImputChange}
                    >
                      <option value={null}>Seleccionar una seccion..</option>
                      {this.state.secciones.length ? (
                        this.state.secciones.map((seccion) => (
                          <option
                            key={seccion.id_seccion}
                            value={seccion.id_seccion}
                          >
                            {seccion.seccion}
                          </option>
                        ))
                      ) : (
                        <option></option>
                      )}
                    </select>

                    <br></br>
                    <br></br>

                    <div className="form group">
                      <input
                        type="text "
                        className="form-control"
                        value={this.state.cedula}
                        placeholder="cedula"
                        onChange={this.onImputChange}
                        name="cedula"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.PrimerNombre}
                        className="form-control"
                        placeholder="Primer Nombre"
                        onChange={this.onImputChange}
                        name="PrimerNombre"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        vale={this.state.segundoNombre}
                        className="form-control"
                        placeholder="Segundo Nombre"
                        onChange={this.onImputChange}
                        name="segundoNombre"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.primerApellido}
                        className="form-control"
                        placeholder="Primer Apellido"
                        onChange={this.onImputChange}
                        name="primerApellido"
                      />
                    </div>

                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.segundoApellido}
                        className="form-control"
                        placeholder="Segundo Apellido"
                        onChange={this.onImputChange}
                        name="segundoApellido"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.sexo}
                        className="form-control"
                        placeholder="Sexo"
                        onChange={this.onImputChange}
                        name="sexo"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.fechaDN}
                        className="form-control"
                        placeholder="Fecha"
                        onChange={this.onImputChange}
                        name="fechaDN"
                      />

                      <button type="submit" className="btn btn-outline-success">
                        Guardar
                      </button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
