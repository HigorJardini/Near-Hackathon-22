import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class OfficesUsers1633396094236 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'offices_users',
        columns: [
          {
            name: 'office_user_id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'released',
            type: 'boolean',
          },
          {
            name: 'office_id',
            type: 'bigint',
          },
          {
            name: 'corporate_user_information_id',
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

    await queryRunner.createForeignKey('offices_users', new TableForeignKey({
      columnNames: ['office_id'],
      referencedColumnNames: ['office_id'],
      referencedTableName: 'offices',
    }));

    await queryRunner.createForeignKey('corporate_users_informations', new TableForeignKey({
      columnNames: ['corporate_user_information_id'],
      referencedColumnNames: ['corporate_user_information_id'],
      referencedTableName: 'corporate_users_informations',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('offices');
  }
}
