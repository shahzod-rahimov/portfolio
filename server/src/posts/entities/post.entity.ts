import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema({ versionKey: false, timestamps: true })
export class Post {
  @Prop()
  title: string;

  @Prop()
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
