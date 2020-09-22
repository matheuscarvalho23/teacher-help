import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class Alter1600788117071 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('students', new TableColumn({
      name: 'teacher_id',
      type: 'uuid',
      isNullable: true,
    }));

    await queryRunner.createForeignKey('students', new TableForeignKey({
      name: 'studentTeacher',
      columnNames: ['teacher_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'teacher',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
