import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  create(createPostDto: CreatePostDto) {
    return this.postModel.create(createPostDto);
  }

  findAll() {
    return this.postModel.find({});
  }

  async findOne(id: string) {
    const post = await this.postModel.findById(id);

    if (!post) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postModel.findByIdAndUpdate(id, UpdatePostDto, {
      new: true,
    });

    if (!post) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return post;
  }

  async remove(id: string) {
    const post = await this.postModel.findByIdAndRemove(id);

    if (!post) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return post;
  }
}
