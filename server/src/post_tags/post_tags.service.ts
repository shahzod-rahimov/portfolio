import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostTagDto } from './dto/create-post_tag.dto';
import { UpdatePostTagDto } from './dto/update-post_tag.dto';
import { PostTag, PostTagDocument } from './entities/post_tag.entity';

@Injectable()
export class PostTagsService {
  constructor(
    @InjectModel(PostTag.name) private postTagModel: Model<PostTagDocument>,
  ) {}
  
  create(createPostTagDto: CreatePostTagDto) {
    return this.postTagModel.create(createPostTagDto);
  }

  findAll() {
    return this.postTagModel.find({});
  }

  async findOne(id: string) {
    const postTag = await this.postTagModel.findById(id);

    if (!postTag) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return postTag;
  }

  async update(id: string, updatePostTagDto: UpdatePostTagDto) {
    const postTag = await this.postTagModel.findByIdAndUpdate(
      id,
      updatePostTagDto,
      { new: true },
    );

    if (!postTag) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return postTag;
  }

  async remove(id: string) {
    const postTag = await this.postTagModel.findByIdAndRemove(id);

    if (!postTag) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return postTag;
  }
}
