import {
  MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey,
} from 'typeorm';

export default class CorporateUsersInformation1633396094234 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'corporate_users_informations',
        columns: [
          {
            name: 'corporate_user_information_id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'corporate_name',
            type: 'text',
          },
          {
            name: 'cnpj',
            type: 'varchar(20)',
          },
          {
            name: 'phone',
            type: 'varchar(20)',
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

    await queryRunner.createForeignKey('corporate_users_informations', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['user_id'],
      referencedTableName: 'users',
    }));

    await queryRunner.createIndex('corporate_users_informations', new TableIndex({
      name: 'INDEX_COR_USERS_INF_CNPJ',
      columnNames: ['cnpj'],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('corporate_users_informations', 'INDEX_COR_USERS_INF_CNPJ');
    await queryRunner.dropTable('corporate_users_informations');
  }
}
