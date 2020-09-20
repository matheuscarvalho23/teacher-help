import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class StudentSkills1600637616670 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students_skills', // Nome da tabela
        columns: [ // Cria um array com as scolunas
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          }, // COLUNA ID
          {
            name: 'name',
            type: 'varchar',
            length: '45',
          }, // COLUNA NOME
          {
            name: 'student_id',
            type: 'uuid',
            isNullable: true,
          }, // COLUNA REFERÊNCIA DA TABELA "students"
        ],
      })
    );

    await queryRunner.createForeignKey('students_skills', new TableForeignKey({
      name: 'studentSkills',
      columnNames: ['student_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'students',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('students_skills');
  }

}
