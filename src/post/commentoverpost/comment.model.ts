import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Userschema } from 'src/user/users/user.model';
import { postschema } from '../userpost/post.model';

    export type commentmodel = HydratedDocument<commentschema>;

    @Schema({ timestamps: true })

export class commentschema {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Userschema' })
    userId: Userschema

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'postschema' })
    postId: postschema
    
  @Prop()
  comment: string;

  
}
export const commentdetail = SchemaFactory.createForClass(commentschema);
