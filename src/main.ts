import { NestFactory } from '@nestjs/core';
import * as readline from 'node:readline';
import { AppModule } from './app.module';
import { CliService } from './cli/cli.service';

async function bootstrap() {
  // setup nest
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // setup CLI REPL
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let cliService = app.get<CliService>(CliService);
  cliService.printHelp();
  rl.on('line', (input) => {
    cliService.handleInput(input);
  });
}
bootstrap();



