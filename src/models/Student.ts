import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn
} from 'typeorm';

import Teacher from './Teacher';

@Entity('students')
class Student {
  @PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	age: number;

	@Column()
	responsible: string;

	@Column()
  classroom: string;

  @Column()
  status: boolean;

  @Column()
  teacher_id: string;

	@ManyToOne(() => Teacher)
	@JoinColumn({ name: 'teacher_id' })
	provider: Teacher;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Student;