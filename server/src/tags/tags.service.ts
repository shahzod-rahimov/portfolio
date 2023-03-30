import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag, TagDocument } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<TagDocument>) {}

  create(createTagDto: CreateTagDto) {
    return this.tagModel.create(createTagDto);
  }

  findAll() {
    return this.tagModel.find({});
  }

  async findOne(id: string) {
    const tag = await this.tagModel.findById(id);

    if (!tag) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return tag;
  }

  async update(id: string, updateTagDto: UpdateTagDto) {
    const tag = await this.tagModel.findByIdAndUpdate(id, updateTagDto, {
      new: true,
    });

    if (!tag) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return tag;
  }

  async remove(id: string) {
    const tag = await this.tagModel.findByIdAndRemove(id);

    if (!tag) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return tag;
  }
}
