using LeilaoOnline.Core;
using System;

namespace LeilaoOnline.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            //Arranje - cenario
            var leilao = new Leilao("Van Gogh");
            var fulano = new Interessada("fulano", leilao);
            var maria = new Interessada("maria", leilao);

            leilao.RecebeLance(fulano, 800);
            leilao.RecebeLance(maria, 900);
            leilao.RecebeLance(fulano, 1000);
            leilao.RecebeLance(fulano, 990);

            //Act - metodo sob teste
            leilao.TerminaPregao();

            //Assert
            var ValorEsperado = 1000;
            var valorObtido = leilao.Ganhador.Valor;

            if(ValorEsperado == valorObtido)
            {
                Console.WriteLine("Teste OK");
            }
            else
            {
                Console.WriteLine("Teste Falhou");
            }
            
        }
    }
}
