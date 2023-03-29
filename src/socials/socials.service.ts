import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { Social, SocialDocument } from './entities/social.entity';

@Injectable()
export class SocialsService {
  constructor(
    @InjectModel(Social.name) private socialModel: Model<SocialDocument>,
  ) {}
  create(createSocialDto: CreateSocialDto) {
    return this.socialModel.create(createSocialDto);
  }

  findAll() {
    return this.socialModel.find({});
  }

  async findOne(id: string) {
    const social = await this.socialModel.findById(id);

    if (!social) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return social;
  }

  async update(id: string, updateSocialDto: UpdateSocialDto) {
    const social = await this.socialModel.findByIdAndUpdate(
      id,
      updateSocialDto,
      {
        new: true,
      },
    );

    if (!social) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return social;
  }

  async remove(id: string) {
    const social = await this.socialModel.findByIdAndRemove(id);

    if (!social) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return social;
  }
}
