import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData() {
    return {
      "mf1": "http://localhost:4201/remoteEntry.json",
      "mf2": "http://localhost:4202/remoteEntry.json"
    };
  }
}
