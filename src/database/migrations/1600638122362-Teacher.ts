import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Teacher1600638122362 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'teacher', // Nome da tabela
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
            name: 'status',
            type: 'int',
          }, // COLUNA STATUS
          {
            name: 'username',
            type: 'varchar',
            length: '45',
          }, // COLUNA USUÁRIO
          {
            name: 'email',
            type: 'varchar',
            length: '255',
          }, // COLUNA EMAIL
          {
            name: 'password',
            type: 'text',
          }, // COLUNA SENHA
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('teacher');
  }

}
