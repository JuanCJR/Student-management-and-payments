import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Materias } from "../entity/materias"

//para traer todas las materias
export const getMaterias = async (req: Request, res: Response): Promise<Response> => {

    const Materiass = await getRepository(Materias).find();
    // respuesta JSon al front
    return res.json(Materiass)
};

// para traer el materia por ID
export const getMateria = async (req: Request, res: Response): Promise<Response> => {

    const results = await getRepository(Materias).findOne(req.params.id);
    // respuesta JSon al front
    return res.json(results)
};

// para crear Materias nuevas
export const createMaterias = async (req: Request, res: Response): Promise<Response> => {
    const newMateria = getRepository(Materias).create(req.body);
    const results = await getRepository(Materias).save(newMateria);
    return res.json(results)
};

export const updateMaterias = async (req: Request, res: Response): Promise<Response> => {
    const materia = await getRepository(Materias).findOne(req.params.id);
    if (materia) {
        getRepository(Materias).merge(materia, req.body);
        const results = await getRepository(Materias).save(materia);
        return res.json(results)
    }
    return res.status(404).json({ msg: "Usuario no encontrado" })
};

export const deleteMateria = async (req: Request, res: Response): Promise<Response> => {

    const results = await getRepository(Materias).delete(req.params.id);
    // respuesta JSon al front
    return res.json(results)
};