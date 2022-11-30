import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import {Repository} from 'typeorm';
import { InventoryEntity } from './inventory.entity';
import { InventoryModel } from './inventory.model';

@Injectable()
export class InventoryService {
    constructor(
        @InjectRepository(InventoryEntity)
        private readonlyinventoryRepository:Repository<InventoryEntity>
    ){

    }

    createInventory(inventoryModel:InventoryModel):Observable<InventoryModel> {
        return from(this.readonlyinventoryRepository.save(inventoryModel))
    }

    updateInventory(id: number,inventoryModel:InventoryModel){
         from(this.readonlyinventoryRepository.update(id,inventoryModel))
    }

    deleteInventory(id: number){
        from(this.readonlyinventoryRepository.delete(id))
   }
}
