import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { VentaEntity } from "./venta.entity";

@Entity('Butacas')
export class ButacaEntity {
  @PrimaryGeneratedColumn()
  Numero: number;
  @ManyToOne(() => VentaEntity, (venta) => venta.butacas)
  venta: VentaEntity; 
}
