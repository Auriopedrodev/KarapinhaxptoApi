using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KarapinhaXPTO.DAL.Migrations
{
    /// <inheritdoc />
    public partial class CampoDelete : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Validade",
                table: "Utilizadors",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Validade",
                table: "Servicos",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Validade",
                table: "Profissionals",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Validade",
                table: "Utilizadors");

            migrationBuilder.DropColumn(
                name: "Validade",
                table: "Servicos");

            migrationBuilder.DropColumn(
                name: "Validade",
                table: "Profissionals");
        }
    }
}
