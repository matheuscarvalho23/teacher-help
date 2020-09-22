import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('teacher')
class Teacher {
  @PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	status: boolean;

	@Column()
	username: string;

	@Column()
  email: string;

  @Column()
	password: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Teacher;