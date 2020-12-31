using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDrive.ViewModels;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TestDrive.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MasterView : TabbedPage
    {

        public MasterView(Usuario usuario)
        {            
            InitializeComponent();
            this.BindingContext = new MasterViewModel(usuario);
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();
            AssinarMensagens("EditarPerfil", 1);
            AssinarMensagens("SalvarPerfil", 0);
        }

        

        protected override void OnDisappearing()
        {
            base.OnDisappearing();
            CancelarMensagens("EditarPerfilCommand");
            CancelarMensagens("SalvarPerfil");
        }

        private void CancelarMensagens(string mensagem)
        {
            MessagingCenter.Unsubscribe<Usuario>(this, mensagem);
        }

        private void AssinarMensagens(string mensagem, int indice)
        {
            MessagingCenter.Subscribe<Usuario>(this, mensagem, (usuario) =>
            {
                this.CurrentPage = this.Children[indice];
            });
        }
    }
}