import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file: any): Promise<string> {
    try {
      const fileFormat = '.' + file.originalname.split('.')[1];
      const fileName = uuid.v4() + fileFormat;
      const filePath = path.join(__dirname, '..', 'static');

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (error) {
      throw new HttpException(
        'Faylni yozishda xatolik',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  fileStream(fileName: string) {
    const filePath = path.join(__dirname, '..', `static/${fileName}`);

    if (fs.existsSync(filePath)) return fs.createReadStream(filePath);
    else throw new HttpException('File Not Found', HttpStatus.NOT_FOUND);
  }
}
