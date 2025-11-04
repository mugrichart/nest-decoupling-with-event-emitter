import { Controller, Get, Post } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('/video')
export class AppController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  createVideo() {
    return this.videoService.publish();
  }
}
