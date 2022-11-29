import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeMediaServer = require('node-media-server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = {
    rtmp: {
      port: 1935,
      chunk_size: 60000,
      gop_cache: true,
      ping: 30,
      ping_timeout: 60,
    },
    http: {
      port: 8000,
      allow_origin: '*',
    },
  };
  const nms = new NodeMediaServer(config);
  nms.run();
  await app.listen(3000);
}
bootstrap();
