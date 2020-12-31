using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace TestDrive.Models
{
    public class Veiculo
    {
        public string nome { get; set; }
        public decimal preco { get; set; }
        public string PrecoFormatado
        {
            get
            {
                return string.Format("R$ {0}", preco);
            }
        }

        public const int VALOR_FREIO_ABS = 800;
        public const int VALOR_AR_CONDICIONADO = 1000;
        public const int VALOR_MP3_PLAYER = 500;

        public bool TemFreioABS { get; set; }
        public bool TemArCondicionado { get; set; }
        public bool TemMP3Player { get; set; }

        public string PrecoTotalFormatado
        {
            get
            {
                return string.Format("Valor total: R$ {0}", preco
                    + (TemFreioABS ? VALOR_FREIO_ABS : 0)
                    + (TemArCondicionado ? VALOR_AR_CONDICIONADO : 0)
                    + (TemMP3Player ? VALOR_MP3_PLAYER : 0));
            }
        }

        public string PrecoTotal
        {
            get
            {
                return string.Format("Total: R$ {0}", PrecoTotal);
            }
        }

        public FormattedString VeiculoLabel
        {
            get
            {
                return new FormattedString
                {
                    Spans = {
                        new Span { Text = nome },
                        new Span { Text = " - " },
                        new Span { Text = PrecoFormatado, FontAttributes = FontAttributes.Bold } }
                };
            }
            set { }
        }
    }
}
