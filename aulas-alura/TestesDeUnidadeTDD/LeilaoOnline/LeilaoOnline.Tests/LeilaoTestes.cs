using LeilaoOnline.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeilaoOnline.Tests
{
    class LeilaoTestes
    {
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
            
        }

    }
}
