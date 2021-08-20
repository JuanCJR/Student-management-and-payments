import { StringifyOptions } from "querystring";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Grados {

    @PrimaryGeneratedColumn()

    id_grado: number;

    @Column()
    grado: string;

   

}