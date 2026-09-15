import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { PrismaModule } from '../prisma/prisma.module';

import { TokenService } from './token.service';
import { JwtStrategy } from './jwt.strategy';
import { LearnerAuthModule } from './learner/learner-auth.module';

@Global()
@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
      }),
    }),
  ],

  providers: [TokenService, JwtStrategy],

  exports: [PassportModule, JwtModule, TokenService, JwtStrategy],
})
export class AuthModule {}
