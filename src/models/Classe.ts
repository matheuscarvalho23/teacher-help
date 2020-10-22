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
import Student from './Student';

@Entity('students')
class Classe {
  @PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('timestamp with time zone')
	date: Date;

	@Column()
	time: string;

	@Column()
	completed: number;

  @Column()
  teacher_id: string;

  @Column()
  student_id: string;

	@ManyToOne(() => Teacher)
	@JoinColumn({ name: 'teacher_id' })
  provider: Teacher;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  model: Student

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Classe;