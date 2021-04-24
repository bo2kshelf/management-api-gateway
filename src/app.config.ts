import {registerAs} from '@nestjs/config';

export const AppConfig = registerAs('app', () => ({
  endpoints: {
    services: {
      bookcover: process.env.BOOKCOVER_SERVICE_URL!,
      readContents: process.env.READ_CONTENTS_SERVICE_URL!,
      editContents: process.env.EDIT_CONTENTS_SERVICE_URL!,
    },
  },
}));
