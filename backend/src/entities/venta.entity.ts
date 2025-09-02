import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ButacaEntity } from './butaca.entity';
import { PromocionEntity } from './promocion.entity';

@Entity('Ventas')
export class VentaEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  nroVenta: number;

  @Column()
  hora: Date;

  @Column()
  fecha: Date;
  @Column()
  total: number;
  @OneToMany(() => ButacaEntity, (Butacas) => Butacas.venta)
  butacas: ButacaEntity[];
  @OneToOne(() => PromocionEntity, (promocion) => promocion.venta)
  promocion: PromocionEntity; 
  
}
