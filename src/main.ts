import { NestFactory } from '@nestjs/core';
import * as readline from 'node:readline';
import { AppModule } from './app.module';
import { CliService } from './cli/cli.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let cliService = app.get<CliService>(CliService);
  rl.on('line', (input) => {
    cliService.handleInput(input);
  });
}
bootstrap();



