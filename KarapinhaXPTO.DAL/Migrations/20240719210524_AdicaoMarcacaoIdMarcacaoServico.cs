using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KarapinhaXPTO.DAL.Migrations
{
    /// <inheritdoc />
    public partial class AdicaoMarcacaoIdMarcacaoServico : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MarcacaoServicos_Marcacaos_MarcacaoId",
                table: "MarcacaoServicos");

            migrationBuilder.AlterColumn<int>(
                name: "MarcacaoId",
                table: "MarcacaoServicos",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Validade",
                table: "Marcacaos",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddForeignKey(
                name: "FK_MarcacaoServicos_Marcacaos_MarcacaoId",
                table: "MarcacaoServicos",
                column: "MarcacaoId",
                principalTable: "Marcacaos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MarcacaoServicos_Marcacaos_MarcacaoId",
                table: "MarcacaoServicos");

            migrationBuilder.DropColumn(
                name: "Validade",
                table: "Marcacaos");

            migrationBuilder.AlterColumn<int>(
                name: "MarcacaoId",
                table: "MarcacaoServicos",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_MarcacaoServicos_Marcacaos_MarcacaoId",
                table: "MarcacaoServicos",
                column: "MarcacaoId",
                principalTable: "Marcacaos",
                principalColumn: "Id");
        }
    }
}
