import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

    export type Usermodel = HydratedDocument<Userschema>;

    @Schema({ timestamps: true })

export class Userschema {
  @Prop()
  First_name: string;

  @Prop()
  Last_name: string;

  @Prop()
  Email: string;

  @Prop()
  mobile_number:number;

  @Prop()
  password:string;

  @Prop()
  isActive:boolean;
   
  @Prop()
  DOB:Date;

}

export const Userdetails = SchemaFactory.createForClass(Userschema);