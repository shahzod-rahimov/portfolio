import { Module } from '@nestjs/common';
import { FilesService } from './file.service';
import { FileController } from './file.controller';

@Module({
  providers: [FilesService],
  exports: [FilesService],
  controllers: [FileController],
})
export class FileModule {}
