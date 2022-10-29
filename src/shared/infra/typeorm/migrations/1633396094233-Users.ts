import {
  MigrationInterface, QueryRunner, Table, TableIndex,
} from 'typeorm';

export default class Users1633396094233 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'user_id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'text',
          },
          {
            name: 'active',
            type: 'boolean',
          },
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
      }),
    );

    await queryRunner.createIndex('users', new TableIndex({
      name: 'INDEX_USER_EMAIL',
      columnNames: ['email'],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('users', 'INDEX_USER_EMAIL');
    await queryRunner.dropTable('users');
  }
}
