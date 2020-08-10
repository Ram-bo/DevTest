using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DeveloperTest.Migrations
{
    public partial class CreateCustomerTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CustomerId",
                table: "Jobs",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    CustomerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.CustomerId);
                });

            migrationBuilder.InsertData(
                table: "Customer",
                columns: new[] { "CustomerId", "Name", "Type" },
                values: new object[] { 1, "Microsoft", "Large" });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "JobId",
                keyValue: 1,
                columns: new[] { "Engineer", "When" },
                values: new object[] { "Test Engineer", new DateTime(2020, 8, 13, 11, 49, 9, 79, DateTimeKind.Local).AddTicks(3293) });

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_CustomerId",
                table: "Jobs",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Customer_CustomerId",
                table: "Jobs",
                column: "CustomerId",
                principalTable: "Customer",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_Customer_CustomerId",
                table: "Jobs");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_CustomerId",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Jobs");

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "JobId",
                keyValue: 1,
                columns: new[] { "Engineer", "When" },
                values: new object[] { "Test", new DateTime(2020, 2, 19, 14, 14, 16, 317, DateTimeKind.Local).AddTicks(2552) });
        }
    }
}
