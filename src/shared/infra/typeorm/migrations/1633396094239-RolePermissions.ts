import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class RolePermissions1633396094239 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'role_permissions',
        columns: [
          {
            name: 'role_permission_id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'role_id',
            type: 'bigint',
          },
          {
            name: 'permission_id',
            type: 'bigint',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey('role_permissions', new TableForeignKey({
      columnNames: ['role_id'],
      referencedColumnNames: ['role_id'],
      referencedTableName: 'roles',
    }));

    await queryRunner.createForeignKey('role_permissions', new TableForeignKey({
      columnNames: ['permission_id'],
      referencedColumnNames: ['permission_id'],
      referencedTableName: 'permissions',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('role_permissions');
  }
}
