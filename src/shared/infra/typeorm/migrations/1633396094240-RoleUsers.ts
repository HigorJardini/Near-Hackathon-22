import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class RoleUsers1633396094240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'role_users',
        columns: [
          {
            name: 'role_users',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'role_id',
            type: 'bigint',
          },
          {
            name: 'user_id',
            type: 'bigint',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey('role_users', new TableForeignKey({
      columnNames: ['role_id'],
      referencedColumnNames: ['role_id'],
      referencedTableName: 'roles',
    }));

    await queryRunner.createForeignKey('role_users', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['user_id'],
      referencedTableName: 'users',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('role_users');
  }
}
