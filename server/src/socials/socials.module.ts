import { Module } from '@nestjs/common';
import { SocialsService } from './socials.service';
import { SocialsController } from './socials.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Social, SocialSchema } from './entities/social.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Social.name, schema: SocialSchema }]),
  ],
  controllers: [SocialsController],
  providers: [SocialsService],
})
export class SocialsModule {}
