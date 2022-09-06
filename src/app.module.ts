import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CliService } from './cli/cli.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CliService],
})
export class AppModule {}
