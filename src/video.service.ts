import { Injectable } from "@nestjs/common"
import { EventEmitter2} from "@nestjs/event-emitter"
import { VideoCreatedEvent } from "./video-created.event";

@Injectable()
export class VideoService {
    constructor(private eventEmitter: EventEmitter2) {}

    async publish() {
        const title = 'How to eat cake and have it too';
        console.log('publishing a new video!');

        const result = await this.eventEmitter.emitAsync("video.created", new VideoCreatedEvent(title))

        console.log(result)

        return result;
    }

}