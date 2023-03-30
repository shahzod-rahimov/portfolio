import {
  Controller,
  Get,
  Param,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { DownloadService } from './download.service';
import { Response } from 'express';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Get(':filename')
  stream(@Param('filename') fileName: string, @Res() response: Response) {
    const file = this.downloadService.fileStream(fileName);
    file.pipe(response);
  }
}
