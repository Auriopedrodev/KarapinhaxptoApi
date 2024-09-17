using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KarapinhaXPTO.DAL.Migrations
{
    public partial class novaBaseDados : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categorias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Tipo = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Horarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Hora = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Horarios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Perfils",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Perfils", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Profissionals",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeCompleto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BI = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Foto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telefone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoriaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profissionals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Profissionals_Categorias_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "Categorias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Servicos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TipoServico = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrecoServico = table.Column<double>(type: "float", nullable: false),
                    CategoriaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Servicos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Servicos_Categorias_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "Categorias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Utilizadors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeCompleto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Telemovel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Foto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BI = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PerfilId = table.Column<int>(type: "int", nullable: true),
                    Activar = table.Column<bool>(type: "bit", nullable: false),
                    EstadoUtilizador = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Utilizadors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Utilizadors_Perfils_PerfilId",
                        column: x => x.PerfilId,
                        principalTable: "Perfils",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ProfissionalHorarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProfissionalId = table.Column<int>(type: "int", nullable: false),
                    HorarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProfissionalHorarios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProfissionalHorarios_Horarios_HorarioId",
                        column: x => x.HorarioId,
                        principalTable: "Horarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProfissionalHorarios_Profissionals_ProfissionalId",
                        column: x => x.ProfissionalId,
                        principalTable: "Profissionals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Marcacaos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DataRegistoMarcacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Pagamento = table.Column<double>(type: "float", nullable: false),
                    EstadoMarcacao = table.Column<bool>(type: "bit", nullable: false),
                    UtilizadorId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Marcacaos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Marcacaos_Utilizadors_UtilizadorId",
                        column: x => x.UtilizadorId,
                        principalTable: "Utilizadors",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "MarcacaoServicos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ServicoId = table.Column<int>(type: "int", nullable: false),
                    CategoriaId = table.Column<int>(type: "int", nullable: false),
                    ProfissionalId = table.Column<int>(type: "int", nullable: false),
                    DataMarcacaoServico = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Hora = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MarcacaoId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MarcacaoServicos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MarcacaoServicos_Categorias_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "Categorias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict); // Modificado para RESTRICT
                    table.ForeignKey(
                        name: "FK_MarcacaoServicos_Marcacaos_MarcacaoId",
                        column: x => x.MarcacaoId,
                        principalTable: "Marcacaos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict); // Modificado para RESTRICT
                    table.ForeignKey(
                        name: "FK_MarcacaoServicos_Profissionals_ProfissionalId",
                        column: x => x.ProfissionalId,
                        principalTable: "Profissionals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict); // Modificado para RESTRICT
                    table.ForeignKey(
                        name: "FK_MarcacaoServicos_Servicos_ServicoId",
                        column: x => x.ServicoId,
                        principalTable: "Servicos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict); // Modificado para RESTRICT
                });

            migrationBuilder.CreateIndex(
                name: "IX_Marcacaos_UtilizadorId",
                table: "Marcacaos",
                column: "UtilizadorId");

            migrationBuilder.CreateIndex(
                name: "IX_MarcacaoServicos_CategoriaId",
                table: "MarcacaoServicos",
                column: "CategoriaId");

            migrationBuilder.CreateIndex(
                name: "IX_MarcacaoServicos_MarcacaoId",
                table: "MarcacaoServicos",
                column: "MarcacaoId");

            migrationBuilder.CreateIndex(
                name: "IX_MarcacaoServicos_ProfissionalId",
                table: "MarcacaoServicos",
                column: "ProfissionalId");

            migrationBuilder.CreateIndex(
                name: "IX_MarcacaoServicos_ServicoId",
                table: "MarcacaoServicos",
                column: "ServicoId");

            migrationBuilder.CreateIndex(
                name: "IX_Profissionals_CategoriaId",
                table: "Profissionals",
                column: "CategoriaId");

            migrationBuilder.CreateIndex(
                name: "IX_ProfissionalHorarios_HorarioId",
                table: "ProfissionalHorarios",
                column: "HorarioId");

            migrationBuilder.CreateIndex(
                name: "IX_ProfissionalHorarios_ProfissionalId",
                table: "ProfissionalHorarios",
                column: "ProfissionalId");

            migrationBuilder.CreateIndex(
                name: "IX_Servicos_CategoriaId",
                table: "Servicos",
                column: "CategoriaId");

            migrationBuilder.CreateIndex(
                name: "IX_Utilizadors_PerfilId",
                table: "Utilizadors",
                column: "PerfilId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MarcacaoServicos");

            migrationBuilder.DropTable(
                name: "ProfissionalHorarios");

            migrationBuilder.DropTable(
                name: "Marcacaos");

            migrationBuilder.DropTable(
                name: "Servicos");

            migrationBuilder.DropTable(
                name: "Horarios");

            migrationBuilder.DropTable(
                name: "Utilizadors");

            migrationBuilder.DropTable(
                name: "Profissionals");

            migrationBuilder.DropTable(
                name: "Perfils");

            migrationBuilder.DropTable(
                name: "Categorias");
        }
    }
}
