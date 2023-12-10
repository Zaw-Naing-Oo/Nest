import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmerModule } from './bookmer/bookmer.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ AuthModule, BookmerModule, UsersModule],
})
export class AppModule {}
