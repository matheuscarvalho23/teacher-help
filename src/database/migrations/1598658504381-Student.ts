import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Student1598658504381 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students', // Nome da tabela
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
          }, // COLUNA NAME
          {
            name: 'age',
            type: 'int',
          }, // COLUNA AGE
          {
            name: 'responsible',
            type: 'varchar',
            length: '45',
          }, // COLUNA RESPONSIBLE
          {
            name: 'class',
            type: 'varchar',
            length: '45',
          }, // COLUNA CLASS
          {
            name: 'status',
            type: 'int',
          }, // COLUNA STATUS
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('students');
  }

}
