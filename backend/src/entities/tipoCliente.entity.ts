import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('TiposCliente')
export class TipoClienteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
