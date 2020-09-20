import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class StudentAddress1600635898567 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students_address', // Nome da tabela
        columns: [ // Cria um array com as scolunas
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          }, // COLUNA ID
          {
            name: 'address',
            type: 'varchar',
            length: '255',
          }, // COLUNA ENDEREÇO
          {
            name: 'district',
            type: 'varchar',
            length: '45',
          }, // COLUNA BAIRRO
          {
            name: 'number',
            type: 'varchar',
            length: '45',
          }, // COLUNA NÚMERO
          {
            name: 'complement',
            type: 'varchar',
            length: '45',
            isNullable: true,
          }, // COLUNA COMPLEMENTO
          {
            name: 'city',
            type: 'varchar',
            length: '45',
          }, // COLUNA CIDADE
          {
            name: 'state',
            type: 'varchar',
            length: '45',
          }, // COLUNA ESTADO
          {
            name: 'zipcode',
            type: 'varchar',
            length: '45',
          }, // COLUNA CEP
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

    await queryRunner.createForeignKey('students_address', new TableForeignKey({
      name: 'studentAddress',
      columnNames: ['student_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'students',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('students_address');
  }

}
