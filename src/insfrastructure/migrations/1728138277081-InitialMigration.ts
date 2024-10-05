import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1728138277081 implements MigrationInterface {
  name = 'InitialMigration1728138277081';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."pet_animal_enum" AS ENUM('DOG', 'CAT', 'CHICKEN', 'COW', 'MOUSE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "pet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "animal" "public"."pet_animal_enum", "age" integer NOT NULL, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pet"`);
    await queryRunner.query(`DROP TYPE "public"."pet_animal_enum"`);
  }
}
