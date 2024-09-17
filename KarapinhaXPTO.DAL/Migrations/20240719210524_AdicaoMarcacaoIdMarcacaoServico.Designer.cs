﻿// <auto-generated />
using System;
using KarapinhaXPTO.DAL.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace KarapinhaXPTO.DAL.Migrations
{
    [DbContext(typeof(KarapinhaContext))]
    [Migration("20240719210524_AdicaoMarcacaoIdMarcacaoServico")]
    partial class AdicaoMarcacaoIdMarcacaoServico
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Categoria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Tipo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categorias");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Horario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Hora")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Horarios");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Marcacao", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DataRegistoMarcacao")
                        .HasColumnType("datetime2");

                    b.Property<bool>("EstadoMarcacao")
                        .HasColumnType("bit");

                    b.Property<double>("Pagamento")
                        .HasColumnType("float");

                    b.Property<int?>("UtilizadorId")
                        .HasColumnType("int");

                    b.Property<bool>("Validade")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("UtilizadorId");

                    b.ToTable("Marcacaos");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.MarcacaoServico", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CategoriaId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DataMarcacaoServico")
                        .HasColumnType("datetime2");

                    b.Property<string>("Hora")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MarcacaoId")
                        .HasColumnType("int");

                    b.Property<int>("ProfissionalId")
                        .HasColumnType("int");

                    b.Property<int>("ServicoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CategoriaId");

                    b.HasIndex("MarcacaoId");

                    b.HasIndex("ProfissionalId");

                    b.HasIndex("ServicoId");

                    b.ToTable("MarcacaoServicos");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Perfil", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Descricao")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Perfils");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Profissional", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("BI")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CategoriaId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Foto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomeCompleto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Validade")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("CategoriaId");

                    b.ToTable("Profissionals");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.ProfissionalHorario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("HorarioId")
                        .HasColumnType("int");

                    b.Property<int>("ProfissionalId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("HorarioId");

                    b.HasIndex("ProfissionalId");

                    b.ToTable("ProfissionalHorarios");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Servico", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CategoriaId")
                        .HasColumnType("int");

                    b.Property<double>("PrecoServico")
                        .HasColumnType("float");

                    b.Property<string>("TipoServico")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Validade")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("CategoriaId");

                    b.ToTable("Servicos");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Utilizador", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("Activar")
                        .HasColumnType("bit");

                    b.Property<string>("BI")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("EstadoUtilizador")
                        .HasColumnType("bit");

                    b.Property<string>("Foto")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomeCompleto")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PerfilId")
                        .HasColumnType("int");

                    b.Property<string>("Telemovel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Validade")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("PerfilId");

                    b.ToTable("Utilizadors");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Marcacao", b =>
                {
                    b.HasOne("KarapinhaXPTOContext.Model.Utilizador", "Utilizador")
                        .WithMany()
                        .HasForeignKey("UtilizadorId");

                    b.Navigation("Utilizador");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.MarcacaoServico", b =>
                {
                    b.HasOne("KarapinhaXPTOContext.Model.Categoria", "Categoria")
                        .WithMany()
                        .HasForeignKey("CategoriaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("KarapinhaXPTOContext.Model.Marcacao", "Marcacao")
                        .WithMany("ListaMarcacaoServico")
                        .HasForeignKey("MarcacaoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("KarapinhaXPTOContext.Model.Profissional", "Profissional")
                        .WithMany()
                        .HasForeignKey("ProfissionalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("KarapinhaXPTOContext.Model.Servico", "Servico")
                        .WithMany()
                        .HasForeignKey("ServicoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Categoria");

                    b.Navigation("Marcacao");

                    b.Navigation("Profissional");

                    b.Navigation("Servico");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Profissional", b =>
                {
                    b.HasOne("KarapinhaXPTOContext.Model.Categoria", "Categoria")
                        .WithMany()
                        .HasForeignKey("CategoriaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Categoria");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.ProfissionalHorario", b =>
                {
                    b.HasOne("KarapinhaXPTOContext.Model.Horario", "Horario")
                        .WithMany()
                        .HasForeignKey("HorarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("KarapinhaXPTOContext.Model.Profissional", "Profissional")
                        .WithMany("HorariosProfissional")
                        .HasForeignKey("ProfissionalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Horario");

                    b.Navigation("Profissional");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Servico", b =>
                {
                    b.HasOne("KarapinhaXPTOContext.Model.Categoria", "Categoria")
                        .WithMany()
                        .HasForeignKey("CategoriaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Categoria");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Utilizador", b =>
                {
                    b.HasOne("KarapinhaXPTOContext.Model.Perfil", "Perfil")
                        .WithMany()
                        .HasForeignKey("PerfilId");

                    b.Navigation("Perfil");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Marcacao", b =>
                {
                    b.Navigation("ListaMarcacaoServico");
                });

            modelBuilder.Entity("KarapinhaXPTOContext.Model.Profissional", b =>
                {
                    b.Navigation("HorariosProfissional");
                });
#pragma warning restore 612, 618
        }
    }
}
