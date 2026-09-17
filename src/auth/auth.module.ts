import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './token.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SmsModule } from '../notifications/sms/sms.module';
import { EmailModule } from '../notifications/email/email.module';

@Global()
@Module({
  imports: [
    SmsModule,
    EmailModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
      }),
    }),
  ],
  controllers: [AuthController],

  providers: [AuthService, TokenService, JwtStrategy],
  exports: [AuthService, PassportModule, JwtModule, TokenService, JwtStrategy],
})
export class AuthModule {}
