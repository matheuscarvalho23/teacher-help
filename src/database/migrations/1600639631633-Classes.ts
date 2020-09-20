import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Classes1600639631633 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes', // Nome da tabela
        columns: [ // Cria um array com as scolunas
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          }, // COLUNA ID
          {
            name: 'date',
            type: 'timestamp',
          }, // COLUNA DATA DA AULA
          {
            name: 'time',
            type: 'varchar',
            length: '45',
          }, // COLUNA HORÁRIO DA AULA
          {
            name: 'completed',
            type: 'int',
          }, // COLUNA SE A AULA FOI CONCLUÍDA
          {
            name: 'teacher_id',
            type: 'uuid',
            isNullable: true,
          }, // COLUNA REFERÊNCIA DA TABELA "teacher"
          {
            name: 'student_id',
            type: 'uuid',
            isNullable: true,
          }, // COLUNA REFERÊNCIA DA TABELA "students"
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );

    await queryRunner.createForeignKey('classes', new TableForeignKey({
      name: 'classesTeacher',
      columnNames: ['teacher_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'teacher',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));

    await queryRunner.createForeignKey('classes', new TableForeignKey({
      name: 'classesStudent',
      columnNames: ['student_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'students',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('classes');
  }

}
