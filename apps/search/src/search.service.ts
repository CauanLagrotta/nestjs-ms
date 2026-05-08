import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  ping() {
    return {
      ok: true,
      service: "Search",
      now: new Date().toISOString(),
    }
  }
}
