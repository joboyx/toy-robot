import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as readline from 'node:readline';
import { CliService } from './cli/cli.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (input) => {
  CliService.handleInput(input);
});


