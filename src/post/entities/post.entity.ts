import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'The unique identifier for a post.',
  })
  id: number;

  @Column({
    name: 'title',
    type: 'varchar',
    length: 250,
  })
  @ApiProperty({
    example: 'Hello World',
    description: 'The title of a post.',
  })
  title: string;

  @Column({
    name: 'slug',
    type: 'varchar',
    length: 250,
  })
  @ApiProperty({
    example: 'hello-world',
    description: 'The slug of the post.',
  })
  slug: string;

  @Column({
    name: 'content',
    type: 'longtext',
  })
  @ApiProperty({
    example: 'This is an example of text content.',
    description: 'The content of the post.',
  })
  content: string;
}
