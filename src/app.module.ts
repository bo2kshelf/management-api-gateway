import {Module} from '@nestjs/common';
import {ConfigModule, ConfigType} from '@nestjs/config';
import {GraphQLGatewayModule} from '@nestjs/graphql';
import {AppConfig} from './app.config';

@Module({
  imports: [
    GraphQLGatewayModule.forRootAsync({
      imports: [ConfigModule.forFeature(AppConfig)],
      inject: [AppConfig.KEY],
      useFactory: async (config: ConfigType<typeof AppConfig>) => ({
        server: {},
        gateway: {
          serviceList: [
            {
              name: 'bookcover',
              url: config.endpoints.services.bookcover,
            },
            {
              name: 'readContents',
              url: config.endpoints.services.readContents,
            },
            {
              name: 'editContents',
              url: config.endpoints.services.editContents,
            },
          ],
          serviceHealthCheck: true,
        },
      }),
    }),
  ],
})
export class AppModule {}
