import { IsNotEmpty, IsEnum } from "class-validator";
import { TYPE } from "../inventory.model";

export class CreateInventoryDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @IsEnum(TYPE)
    type: TYPE;

    @IsNotEmpty()
    production_date: string;

}

