import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Userschema } from 'src/user/users/user.model';

    export type Userpostmodel = HydratedDocument<postschema>;

    @Schema({ timestamps: true })

export class postschema {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Userschema' })
    userId: Userschema

  @Prop()
  post: string;

  
}
export const postDetails = SchemaFactory.createForClass(postschema);
