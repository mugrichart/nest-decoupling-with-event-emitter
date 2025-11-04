import { Injectable } from "@nestjs/common"
import { OnEvent} from "@nestjs/event-emitter"
import { VideoCreatedEvent } from "./video-created.event";

@Injectable()
export class ViewerService {
    @OnEvent("video.created")
    notify(payload: VideoCreatedEvent) {
        console.log('notifying subscribers...', payload.title);
        return 1
    }

    @OnEvent("video.created")
    doSomethingElse() {
        try {
            console.log('anything at all')
            return 2
        } catch (error) {
            console.log('errrrrrrrrr')            
        }
    }
}