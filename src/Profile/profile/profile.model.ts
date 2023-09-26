import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Userschema } from 'src/user/users/user.model';

    export type Profilemodel = HydratedDocument<profileschema>;

    @Schema({ timestamps: true })

export class profileschema {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Userschema' })
  userId: Userschema;

  @Prop()
  profile_pic:string

  @Prop({default:false})
  isActive:boolean;
   
  
}

export const profileDetails = SchemaFactory.createForClass(profileschema);