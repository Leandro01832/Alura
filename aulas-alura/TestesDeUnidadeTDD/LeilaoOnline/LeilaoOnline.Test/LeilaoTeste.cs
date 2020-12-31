using LeilaoOnline.Core;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace LeilaoOnline.Test
{
    [TestFixture]
    public class LeilaoTeste
    {
        [Test]
        public void LeilaoComVariosLances()
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
            Assert.AreEqual(ValorEsperado, valorObtido);
        }
    }
}
