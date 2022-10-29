import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class PermissionUsers1633396094241 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'permission_users',
        columns: [
          {
            name: 'role_users',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'permission_id',
            type: 'bigint',
          },
          {
            name: 'user_id',
            type: 'bigint',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey('permission_users', new TableForeignKey({
      columnNames: ['permission_id'],
      referencedColumnNames: ['permission_id'],
      referencedTableName: 'permissions',
    }));

    await queryRunner.createForeignKey('permission_users', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['user_id'],
      referencedTableName: 'users',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('permission_users');
  }
}
