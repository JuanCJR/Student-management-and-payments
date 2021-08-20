import { StringifyOptions } from "querystring";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm"
import { Grados } from "./grados";

@Entity()
export class Seccion {

    @PrimaryGeneratedColumn()

    id_seccion: number;

    @Column()
    seccion: string;

    
    @OneToOne(()=>Grados)
    @JoinColumn()
    grados:Grados
}