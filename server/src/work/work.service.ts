import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work, WorkDocument } from './entities/work.entity';

@Injectable()
export class WorkService {
  constructor(@InjectModel(Work.name) private workModel: Model<WorkDocument>) {}

  create(createWorkDto: CreateWorkDto) {
    return this.workModel.create(createWorkDto);
  }

  findAll() {
    return this.workModel.find({});
  }

  async findOne(id: string) {
    const work = await this.workModel.findById(id);

    if (!work) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return work;
  }

  async update(id: string, updateworkDto: UpdateWorkDto) {
    const work = await this.workModel.findByIdAndUpdate(id, updateworkDto, {
      new: true,
    });

    if (!work) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return work;
  }

  async remove(id: string) {
    const work = await this.workModel.findByIdAndRemove(id);

    if (!work) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return work;
  }
}
