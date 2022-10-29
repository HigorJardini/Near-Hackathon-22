import {
  MigrationInterface, QueryRunner, Table,
} from 'typeorm';

export default class Roles1633396094237 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'roles',
        columns: [
          {
            name: 'role_id',
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
    await queryRunner.dropTable('roles');
  }
}
