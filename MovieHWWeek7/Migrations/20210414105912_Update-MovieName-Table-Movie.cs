using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieHWWeek7.Migrations
{
    public partial class UpdateMovieNameTableMovie : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Movie",
                keyColumn: "ID",
                keyValue: new Guid("9fce203a-3bb6-4fd8-9c05-22ef125355b4"));

            migrationBuilder.InsertData(
                table: "Movie",
                columns: new[] { "ID", "Genre", "MovieLength", "MovieName", "ReleaseDate" },
                values: new object[] { new Guid("6ad36f03-a56a-4286-bb23-c94a41c9e27a"), "Action", 80, "StarWars", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Movie",
                keyColumn: "ID",
                keyValue: new Guid("6ad36f03-a56a-4286-bb23-c94a41c9e27a"));

            migrationBuilder.InsertData(
                table: "Movie",
                columns: new[] { "ID", "Genre", "MovieLength", "MovieName", "ReleaseDate" },
                values: new object[] { new Guid("9fce203a-3bb6-4fd8-9c05-22ef125355b4"), "Action", 2019, "Edward Snowden", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });
        }
    }
}
