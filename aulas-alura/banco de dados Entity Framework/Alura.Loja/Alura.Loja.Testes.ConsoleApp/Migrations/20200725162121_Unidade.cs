using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Alura.Loja.Testes.ConsoleApp.Migrations
{
    public partial class Unidade : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Preco",
                table: "Produto",
                newName: "PrecoUnitario");

            migrationBuilder.AddColumn<string>(
                name: "Unidade",
                table: "Produto",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Unidade",
                table: "Produto");

            migrationBuilder.RenameColumn(
                name: "PrecoUnitario",
                table: "Produto",
                newName: "Preco");
        }
    }
}
