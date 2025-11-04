import { Injectable } from "@nestjs/common"
import { ViewerService } from "./viewer.service"

@Injectable()
export class VideoService {
    constructor(private viewService: ViewerService) {}

    publish() {
        const title = 'How to eat cake and have it too';
        console.log('publishing a new video!');

        this.viewService.notify(title)
        // and many other side tasks. This would be chaotic due to coupling

        // we need to reduce the coupling between all this and the publish method

        return 'all done';
    }

}