import {
  MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey,
} from 'typeorm';

export default class Offices1633396094235 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'offices',
        columns: [
          {
            name: 'office_id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'cnpj',
            type: 'varchar(20)',
          },
          {
            name: 'fantasy_name',
            type: 'text',
          },
          {
            name: 'corporate_name',
            type: 'text',
          },
          {
            name: 'active',
            type: 'boolean',
          },
          {
            name: 'user_id',
            type: 'bigint',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey('offices', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['user_id'],
      referencedTableName: 'users',
    }));

    await queryRunner.createIndex('offices', new TableIndex({
      name: 'INDEX_OFFICES_CNPJ',
      columnNames: ['cnpj'],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('offices', 'INDEX_OFFICES_CNPJ');
    await queryRunner.dropTable('offices');
  }
}
