import { Entity, Property, Unique } from '@mikro-orm/core';
import { BaseEntity } from './base-entity';

@Entity()
export class User extends BaseEntity {

  @Property()
  name: string;

  @Property()
  @Unique()
  email: string;

  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;
  }

}