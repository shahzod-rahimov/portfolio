import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SocialDocument = HydratedDocument<Social>;

@Schema({ versionKey: false, timestamps: true })
export class Social {
  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop()
  icon: string;
}

export const SocialSchema = SchemaFactory.createForClass(Social);
