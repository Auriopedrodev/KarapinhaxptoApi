using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KarapinhaXPTO.DAL.Migrations
{
    /// <inheritdoc />
    public partial class MarcacaoServicoSemIdMarcacao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MarcacoServicos_Marcacaos_MarcacaoId",
                table: "MarcacoServicos");

            migrationBuilder.AlterColumn<int>(
                name: "MarcacaoId",
                table: "MarcacoServicos",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_MarcacoServicos_Marcacaos_MarcacaoId",
                table: "MarcacoServicos",
                column: "MarcacaoId",
                principalTable: "Marcacaos",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MarcacoServicos_Marcacaos_MarcacaoId",
                table: "MarcacoServicos");

            migrationBuilder.AlterColumn<int>(
                name: "MarcacaoId",
                table: "MarcacoServicos",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_MarcacoServicos_Marcacaos_MarcacaoId",
                table: "MarcacoServicos",
                column: "MarcacaoId",
                principalTable: "Marcacaos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
