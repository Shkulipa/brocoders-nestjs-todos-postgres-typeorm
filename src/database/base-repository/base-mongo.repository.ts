import { Injectable, Logger } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class BaseRepository<TDocument> {
  protected readonly logger: Logger;
  protected msgItemNotFound = '';

  constructor(protected readonly model: Repository<TDocument>) {}

  async findOne(options: FindOneOptions<TDocument>): Promise<TDocument> {
    return await this.model.findOne(options);
  }
}
