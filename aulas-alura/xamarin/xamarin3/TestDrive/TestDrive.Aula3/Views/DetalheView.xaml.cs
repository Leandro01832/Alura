using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;

namespace TestDrive.Views
{
    public partial class DetalheView : ContentPage
    {
        public Veiculo Veiculo { get; set; }
        private const int FREIO_ABS = 800;
        private const int AR_CONDICIONADO = 1000;
        private const int MP3_PLAYER = 500;

        public string TextoFreioABS
        {
            get { return string.Format("Freio ABS - R$ {0}", FREIO_ABS); }
        }

        public string TextoArCondicionado
        {
            get { return string.Format("Ar condicionado - R$ {0}", AR_CONDICIONADO); }
        }

        public string TextoMp3Player
        {
            get { return string.Format("MP3 Player - R$ {0}", MP3_PLAYER); }
        }

        bool TemFreioABS;
        public bool temFreioABS
        {
            get { return TemFreioABS; }
            set
            {
                TemFreioABS = value;
                if (TemFreioABS)
                {
                    DisplayAlert("Freio ABS", "Freio ABS LIGADO.", "OK");
                }
                else
                {
                    DisplayAlert("Freio ABS", "Freio ABS DESLIGADO.", "OK");
                }
                OnPropertyChanged();
                OnPropertyChanged(nameof(ValorTotal));
            }
        }

        bool TemArCondicionado;
        public bool temArCondicionado
        {
            get { return TemArCondicionado; }
            set
            {
                TemArCondicionado = value;
                if (TemArCondicionado)
                {
                    DisplayAlert("Ar condicionado", "Ar condicionado LIGADO.", "OK");
                }
                else
                {
                    DisplayAlert("Ar condicionado", "Ar condicionado DESLIGADO.", "OK");
                }
                OnPropertyChanged();
                OnPropertyChanged(nameof(ValorTotal));
            }
        }

        bool TemMp3Player;
        public bool temMp3Player
        {
            get { return TemMp3Player; }
            set
            {
                TemMp3Player = value;
                if (TemMp3Player)
                {
                    DisplayAlert("MP3 Player", "MP3 Player LIGADO.", "OK");
                }
                else
                {
                    DisplayAlert("MP3 Player", "MP3 Player DESLIGADO.", "OK");
                }
                OnPropertyChanged();
                OnPropertyChanged(nameof(ValorTotal));
            }
        }

        public string ValorTotal
        {
            get
            {
                return string.Format("Valor total: R$ {0}", Veiculo.preco
                    + (temFreioABS ? FREIO_ABS : 0)
                    + (temArCondicionado ? AR_CONDICIONADO : 0)
                    + (temMp3Player ? MP3_PLAYER : 0));
            }
        }

        public DetalheView(Veiculo veiculo)
        {
            this.Veiculo = veiculo;
            InitializeComponent();
            this.BindingContext = this;
        }

        private void botaoProximo_Clicked(object sender, EventArgs e)
        {
            Navigation.PushAsync(new AgendamentoView(this.Veiculo));
        }
    }
}


