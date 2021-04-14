using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieHWWeek7.Migrations
{
    public partial class AddLineToMovie : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Movie",
                columns: new[] { "ID", "Genre", "MovieLength", "MovieName", "ReleaseDate" },
                values: new object[] { new Guid("9fce203a-3bb6-4fd8-9c05-22ef125355b4"), "Action", 2019, "Edward Snowden", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Movie",
                keyColumn: "ID",
                keyValue: new Guid("9fce203a-3bb6-4fd8-9c05-22ef125355b4"));
        }
    }
}
