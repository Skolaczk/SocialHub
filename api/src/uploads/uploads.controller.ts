import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { multerOptions } from 'src/config';

@Controller('uploads')
export class UploadsController {
  constructor(private config: ConfigService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  async uploadFile(@UploadedFile() file) {
    return {
      message: 'File uploaded successfully',
    };
  }
}
