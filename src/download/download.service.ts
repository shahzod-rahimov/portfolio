import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';


@Injectable()
export class DownloadService {
  fileStream(fileName: string) {
    return createReadStream(join(__dirname, '..', `static/${fileName}`));
  }
}
