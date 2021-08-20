import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Grados } from "../entity/grados"

//para traer todos los grados
export const getGrados = async (req: Request, res: Response): Promise<Response> => {

    const grados = await getRepository(Grados).find();
    // respuesta JSon al front
    return res.json(grados)
};

// para traer el grado por ID
export const getGrado = async (req: Request, res: Response): Promise<Response> => {

    const results = await getRepository(Grados).findOne(req.params.id);
    // respuesta JSon al front
    return res.json(results)
};

// para crear grados nuevos 
export const createGrados = async (req: Request, res: Response): Promise<Response> => {
    const newGrado = getRepository(Grados).create(req.body);
    const results = await getRepository(Grados).save(newGrado);
    return res.json(results)
};

//para editar grados
export const updateGrado = async (req: Request, res: Response): Promise<Response> => {
    const grado = await getRepository(Grados).findOne(req.params.id);
    if (grado) {
        getRepository(Grados).merge(grado, req.body);
        const results = await getRepository(Grados).save(grado);
        return res.json(results)
    }
    return res.status(404).json({ msg: "Usuario no encontrado" })
};

export const deleteGrado = async (req: Request, res: Response): Promise<Response> => {

    const results = await getRepository(Grados).delete(req.params.id);
    // respuesta JSon al front
    return res.json(results)
};