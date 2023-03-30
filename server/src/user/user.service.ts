import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilesService } from '../file/file.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly fileService: FilesService,
  ) {}

  async create(createUserDto: CreateUserDto, files: any) {
    const { cv, photo } = files;
    const res = await Promise.all([
      this.fileService.createFile(cv[0]),
      this.fileService.createFile(photo[0]),
    ]).then((res) => res);

    const user = await this.userModel.create({
      ...createUserDto,
      cv_link: res[0],
      photo: res[1],
    });

    return user;
  }

  findAll() {
    return this.userModel.find({});
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });

    if (!user) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndRemove(id);

    if (!user) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
