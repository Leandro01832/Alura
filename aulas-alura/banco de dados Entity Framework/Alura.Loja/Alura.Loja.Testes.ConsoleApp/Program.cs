using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alura.Loja.Testes.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var p1 = new Produto() { Nome= "Suco de laranla", Categoria = "Bebidas", PrecoUnitario = 12.40f, Unidade = "Litros" };
            var p2 = new Produto() { Nome = "Queijo coalho", Categoria = "Alimentos", PrecoUnitario = 8.40f, Unidade = "unidade" };
            var p3 = new Produto() { Nome = "Biscoito recheado", Categoria = "Alimentos", PrecoUnitario = 12.40f, Unidade = "unidade" };

            var promocaoDePascoa = new Promocao();
            promocaoDePascoa.Descricao = "Pascoa Feliz";
            promocaoDePascoa.DataInicio = DateTime.Now;
            promocaoDePascoa.DataFinal = DateTime.Now.AddMonths(3);
            promocaoDePascoa.IncluiProduto(p1);
            promocaoDePascoa.IncluiProduto(p2);
            promocaoDePascoa.IncluiProduto(p3);


            using (var contexto = new LojaContext())
            {
                contexto.Promocoes.Add(promocaoDePascoa);
                contexto.SaveChanges();
            }
            
        }

    }
}
