import { Request, Response } from "express";
import { getRepository, getConnection, createConnection, Connection, Repository } from "typeorm";
import { Alumno } from "../entity/Alumno";
import "reflect-metadata"
import { Seccion } from "../entity/secciones";
import { report } from "node:process";
//para traer todos los usuarios
export const getAlumnos = async (
  req: Request,
  res: Response
): Promise<Response> => {
    const alumnos = await 
    getRepository(Alumno)
    .createQueryBuilder("alumno")
    .leftJoinAndSelect("alumno.seccion", "seccion")
    .leftJoinAndSelect("seccion.grados", "grados")
    .getMany();
  return res.json(alumnos);
};

// para traer el usuario por ID
export const getAlumno = async (
  req: Request,
  res: Response
): Promise<Response> => {
    const alumno = await 
    getRepository(Alumno)
    .createQueryBuilder("alumno")
    .leftJoinAndSelect("alumno.seccion", "seccion")
    .leftJoinAndSelect("seccion.grados", "grados")
    .where("alumno.id_alumno = :id_alumno", {id_alumno:req.params.id_alumno}).getOne()
  return res.json(alumno);
};

// para crear usuarios nuevos
// export const createUsers = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   createConnection()
// .then( Connection=>{
//   const alumnoRepository=Connection.getRepository(Alumno);
//   const alumno=new Alumno();
//   alumno.cedula="";
//   alumno.PrimerNombre="",
//   alumno.segundoNombre="",
//   alumno.primerApellido="",
//   alumno.segundoApellido="",
//   alumno.sexo="",
//   alumno.fechaDN=""

//   const seccionRepository=Connection.getRepository(Seccion);
//   const seccion=new Seccion();
//   seccion.seccion=""

// })
//   return res.json();
// };



// export const createUser = async (
//   req: Request,
//   res: Response
// ) : Promise<Response>=> {
//   const alumnoRepo = getRepository(Alumno);
//   const alumno = alumnoRepo.create(
//         req.body

//   );
//   await alumnoRepo.save(alumno).catch((err) => {
//     console.log("Error: ", err);
//   });
//   console.log("Nuevo alumno Guardado", alumno);

//   const seccionRepo = getRepository(Seccion);
//   const seccion = seccionRepo.save(
//     req.body
//   );
  
//   return res.json()  
// };

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log(req.body);

  await getConnection()
  .createQueryBuilder()
  .insert()
  .into(Alumno)
  .values([
    req.body
  ]) 
  .execute();
  return res.json()
}
  
  
  
  
  
//   // const alumno=getRepository(Alumno)
//   // alumno.create()
//   // alumno.save(req.body)
//   return res.json()
// };
 
export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(Alumno).findOne(req.params.id);
  if (user) {
    getRepository(Alumno).merge(user, req.body);
    const results = await getRepository(Alumno).save(user);
    return res.json(results);
  }
  return res.status(404).json({ msg: "Usuario no encontrado" });
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Alumno).delete(req.params.id);
  // respuesta JSon al front
  return res.json(results);
};
