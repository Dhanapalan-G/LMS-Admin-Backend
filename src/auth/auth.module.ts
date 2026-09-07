import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { OtpService } from './services/otp.service';
import { TokenService } from './services/token.service';

import { PrismaModule } from '../prisma/prisma.module';
import { RolesGuard } from './guards/roles.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),

    PrismaModule,

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
  ],

  controllers: [AuthController],

  providers: [
    AuthService,
    JwtStrategy,
    OtpService,
    TokenService,
    RolesGuard,
    JwtAuthGuard,
  ],

  exports: [
    PassportModule,
    JwtModule,
    OtpService,
    TokenService,
    RolesGuard,
    JwtAuthGuard,
  ],
})
export class AuthModule {}
