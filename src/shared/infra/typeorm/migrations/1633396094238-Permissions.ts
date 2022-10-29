import {
  MigrationInterface, QueryRunner, Table,
} from 'typeorm';

export default class Permissions1633396094238 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'permissions',
        columns: [
          {
            name: 'permission_id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(255)',
          },
          {
            name: 'display_name',
            type: 'varchar(255)',
          },
          {
            name: 'description',
            type: 'text',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('permissions');
  }
}
