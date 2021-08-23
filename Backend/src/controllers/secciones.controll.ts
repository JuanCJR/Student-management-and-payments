import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Seccion } from "../entity/secciones";

//para traer todas las secciones
export const getSecciones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const seccion = await getRepository(Seccion)
    .createQueryBuilder("seccion")
    .leftJoinAndSelect("seccion.grados", "grados")
    .getMany();
  // respuesta JSon al front
  return res.json(seccion);
};

//para traer todas las secciones
export const getSeccionesPorGrado = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_grado } = req.params;

  const seccion = await getRepository(Seccion)
    .createQueryBuilder("seccion")
    .innerJoinAndSelect("seccion.grados", "grados")
    .where("seccion.grado = :id_grado", { id_grado: id_grado })
    .getMany();
  // respuesta JSon al front
  return res.json(seccion);
};

//para crear las secciones
export const createSeccion = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newSeccion = getRepository(Seccion).create(req.body);
  const results = await getRepository(Seccion).save(newSeccion);
  return res.json(results);
};

// para obtener por ID las secciones
export const getSeccion = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Seccion).findOne(req.params.id);
  // respuesta JSon al front
  return res.json(results);
};

//para editar las secciones
export const updateSeccion = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const seccion = await getRepository(Seccion).findOne(req.params.id);
  if (seccion) {
    getRepository(Seccion).merge(seccion, req.body);
    const results = await getRepository(Seccion).save(seccion);
    return res.json(results);
  }
  return res.status(404).json({ msg: "Usuario no encontrado" });
};

//para borrar las secciones por ID
export const deleteSeccion = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Seccion).delete(req.params.id);
  // respuesta JSon al front
  return res.json(results);
};
