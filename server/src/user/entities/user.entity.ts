import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ versionKey: false, timestamps: true })
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  fullname: string;

  @Prop()
  phone_number: string;

  @Prop()
  photo: string;

  @Prop()
  cv_link: string;

  @Prop()
  birth_date: Date;

  @Prop()
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
