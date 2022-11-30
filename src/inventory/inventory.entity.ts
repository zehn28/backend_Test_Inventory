import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
import { TYPE } from "./inventory.model";


@Entity()
export class InventoryEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    type: TYPE;

    @Column()
    price: number;

    @Column()
    name: string;

    @Column({type: 'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
    production_date: Date;
}