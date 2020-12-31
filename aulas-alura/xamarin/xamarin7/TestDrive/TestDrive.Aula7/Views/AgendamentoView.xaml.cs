using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDrive.Models;
using TestDrive.ViewModels;
using Xamarin.Forms;

namespace TestDrive.Views
{
    public partial class AgendamentoView : ContentPage
    {
        public AgendamentoViewModel ViewModel { get; set; }

        public AgendamentoView(Veiculo veiculo)
        {
            InitializeComponent();
            this.ViewModel = new AgendamentoViewModel(veiculo);
            this.BindingContext = this.ViewModel;
        }

        protected  override void OnAppearing()
        {
            base.OnAppearing();
            MessagingCenter.Subscribe<Agendamento>(this, "Agendamento",
               async (msg) =>
                {
                var confirmar =
                await DisplayAlert("Salvar Agendamento", "Deseja realmente salvar este agendamento?", "Sim", "Não");

                    if (confirmar)
                    {
                      await  this.ViewModel.SalvarAgendamento();
                    }
                   
                });

            MessagingCenter.Subscribe<Agendamento>(this, "SucessoAgendamento", (msg) => {
                DisplayAlert("Agendamento", "Agendamento salvo com sucesso!!!", "Ok");
            });

            MessagingCenter.Subscribe<ArgumentException>(this, "FalhaAgendamento", (msg) => {
                DisplayAlert("Agendamento", "Falha ao agendar o teste drive. Verifique os dados e tente mais tarde.", "Ok");
            });
        }

        protected override void OnDisappearing()
        {
            base.OnDisappearing();
            MessagingCenter.Unsubscribe<Agendamento>(this, "Agendamento");
            MessagingCenter.Unsubscribe<Agendamento>(this, "SucessoAgendamento");
            MessagingCenter.Unsubscribe<Agendamento>(this, "FalhaAgendamento");
        }
    }
}
