import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} postTag`;
  }

  update(id: number, updatePostTagDto: UpdatePostTagDto) {
    return `This action updates a #${id} postTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} postTag`;
  }
}
