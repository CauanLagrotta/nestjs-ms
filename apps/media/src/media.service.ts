import { Injectable } from "@nestjs/common";

@Injectable()
export class MediaService {
  ping() {
    return {
      ok: true,
      service: "Media",
      now: new Date().toISOString(),
    };
  }
}
