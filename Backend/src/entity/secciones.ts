import { StringifyOptions } from "querystring";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import { Grados } from "./grados";

@Entity()
export class Seccion {

    @PrimaryGeneratedColumn()

    id_seccion: number;

    @Column()
    seccion: string;

    
    @ManyToOne(()=>Grados)
    @JoinColumn()
    grados:Grados
}