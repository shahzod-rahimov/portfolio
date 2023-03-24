import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WorkDocument = HydratedDocument<Work>;

@Schema()
export class Work {
  @Prop()
  company_name: string;

  @Prop()
  from: Date;

  @Prop()
  to: Date;

  @Prop()
  position: string;
}

export const WorkSchema = SchemaFactory.createForClass(Work);
