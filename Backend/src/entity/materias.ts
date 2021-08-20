import { StringifyOptions } from "querystring";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import { Grados } from "./grados";

@Entity()
export class Materias {

    @PrimaryGeneratedColumn()

    id_materia: number;

    @Column()
    materias: string;

    

    @ManyToOne(() =>Grados)
    @JoinColumn()
    grados:Grados
    
}