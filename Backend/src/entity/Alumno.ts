import { StringifyOptions } from "querystring";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { Seccion } from "./secciones";


@Entity()
export class Alumno {

    @PrimaryGeneratedColumn()

    id_alumno: number;

    @Column()
    cedula: string;
    @Column()
    PrimerNombre: string;
    @Column()
    segundoNombre: string;
    @Column()
    primerApellido: string;
    @Column()
    segundoApellido: string;
    @Column()
    sexo: string; 
    @Column()
    fechaDN: string;

    @OneToOne(()=>Seccion)
    @JoinColumn()
    seccion:Seccion

 
} 