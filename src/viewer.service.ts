import { Injectable } from "@nestjs/common"

@Injectable()
export class ViewerService {
    notify(title: string) {
        console.log('notifying subscribers...', title);
    }
}