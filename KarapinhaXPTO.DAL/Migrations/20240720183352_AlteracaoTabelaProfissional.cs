using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KarapinhaXPTO.DAL.Migrations
{
    /// <inheritdoc />
    public partial class AlteracaoTabelaProfissional : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Profissionals",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PerfilId",
                table: "Profissionals",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Profissionals",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Profissionals_PerfilId",
                table: "Profissionals",
                column: "PerfilId");

            migrationBuilder.AddForeignKey(
                name: "FK_Profissionals_Perfils_PerfilId",
                table: "Profissionals",
                column: "PerfilId",
                principalTable: "Perfils",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Profissionals_Perfils_PerfilId",
                table: "Profissionals");

            migrationBuilder.DropIndex(
                name: "IX_Profissionals_PerfilId",
                table: "Profissionals");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Profissionals");

            migrationBuilder.DropColumn(
                name: "PerfilId",
                table: "Profissionals");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Profissionals");
        }
    }
}
