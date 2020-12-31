using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace App1
{
   public class Veiculo
    {
        public string Nome { get; set; }
        public Decimal Preco { get; set; }
    }

    public partial class MainPage : ContentPage
    {
        public List<Veiculo> Veiculos { get; set; }

        public MainPage()
        {
            this.Veiculos = new List<Veiculo>
            {
                new Veiculo{Nome = "Azera V6", Preco = 60000},
                new Veiculo{Nome = "Fiesta 2.0", Preco = 50000},
                new Veiculo{Nome = "HB20 S", Preco = 40000},
            };

            InitializeComponent();
            this.BindingContext = this;
           // listViewVeiculos.ItemsSource = this.Veiculos;
        }
    }
}
