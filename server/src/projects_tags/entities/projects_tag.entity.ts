import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectsTagDocument = HydratedDocument<ProjectsTag>;

@Schema({ versionKey: false, timestamps: true })
export class ProjectsTag {
  @Prop()
  project_id: string;

  @Prop()
  tag_id: string;
}

export const ProjectsTagSchema = SchemaFactory.createForClass(ProjectsTag);
