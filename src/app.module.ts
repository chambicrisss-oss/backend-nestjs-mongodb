import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module.js';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tasksdb'),
    TasksModule,
  ],
})
export class AppModule {}
