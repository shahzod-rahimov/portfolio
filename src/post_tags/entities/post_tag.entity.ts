import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostTagDocument = HydratedDocument<PostTag>;

@Schema()
export class PostTag {
  @Prop()
  tag_id: string;

  @Prop()
  post_id: string;
}

export const PostTagSchema = SchemaFactory.createForClass(PostTag);
