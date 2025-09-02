import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { VentaEntity } from "./venta.entity";

@Entity('Promociones')
export class PromocionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  porcentajeDescuento: number;
  @OneToOne(() => VentaEntity, (venta) => venta.promocion)
  venta: VentaEntity;
}
