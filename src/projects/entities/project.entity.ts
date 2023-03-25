import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema({ versionKey: false, timestamps: true })
export class Project {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  url: string;

  @Prop()
  work_id: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
