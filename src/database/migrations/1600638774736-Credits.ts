import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Credits1600638774736 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'credits', // Nome da tabela
        columns: [ // Cria um array com as scolunas
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          }, // COLUNA ID
          {
            name: 'status',
            type: 'varchar',
            length: '45',
          }, // COLUNA STATUS
          {
            name: 'amount',
            type: 'float',
          }, // COLUNA NOME
          {
            name: 'description',
            type: 'text',
          }, // COLUNA DESCRIÇÃO
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

    await queryRunner.createForeignKey('credits', new TableForeignKey({
      name: 'creditsTeacher',
      columnNames: ['teacher_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'teacher',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));

    await queryRunner.createForeignKey('credits', new TableForeignKey({
      name: 'creditsStudent',
      columnNames: ['student_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'students',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('credits');
  }

}
