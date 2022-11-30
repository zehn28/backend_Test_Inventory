import { Body, Controller, Delete, Param, Post,Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { InventoryModel } from './inventory.model';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(private inventoryService:InventoryService) {

    }

    @Post()
    create(@Body() inventoryModel:InventoryModel):Observable<InventoryModel>{
        return this.inventoryService.createInventory(inventoryModel);
    }

    @Put(':id')
    Update(@Param('id') id:number,@Body() inventoryModel:InventoryModel){
        return this.inventoryService.updateInventory(id,inventoryModel);
    }

    @Delete(':id')
    Delete(@Param('id') id:number){
        return this.inventoryService.deleteInventory(id);
    }

}
