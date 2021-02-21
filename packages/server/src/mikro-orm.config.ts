import { User } from './entities/user';

export default {
  entities: [User],
  dbName: 'atlas-db',
  type: 'postgresql',
  forceUtcTimezone: true,
};