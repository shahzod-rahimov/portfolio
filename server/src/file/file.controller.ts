import { Controller, Get, Param, Res } from '@nestjs/common';
import { FilesService } from './file.service';
import { Response } from 'express';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FilesService) {}

  @Get(':fileName')
  stream(@Param('fileName') fileName: string, @Res() response: Response) {
    const file = this.fileService.fileStream(fileName);
    file.pipe(response);
  }
}
