/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SoftwareEngineerController } from "./software-eng.controller";
import { SoftwareEngineerService } from "./software-eng.service";
import { MongooseModule } from "@nestjs/mongoose";
import { SoftwareEngineer, SoftwareEngineerSchema } from "../Schemas/softwareEng.schema";


@Module({
    imports:[    MongooseModule.forFeature([{ name: SoftwareEngineer.name, schema: SoftwareEngineerSchema }]),
],
  controllers: [SoftwareEngineerController],

  providers: [SoftwareEngineerService]
})
export class SoftwareEngModule {}
