using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace TestDrive.ViewModels
{
   public class MasterViewModel : BaseViewModel
    {        

        public string Nome
        {
            get { return this.usuario.nome; }
            set { this.usuario.nome = value; }
        }

       

        public string dataNascimento
        {
            get { return this.usuario.dataNascimento; }
            set { this.usuario.dataNascimento = value; }
        }        

        public string Telefone
        {
            get { return this.usuario.telefone; }
            set { this.usuario.telefone = value; }
        }

        public string Email
        {
            get { return this.usuario.email; }
            set { this.usuario.email = value; }
        }

        private bool editando = false;

        public bool Editando
        {
            get { return editando; }
            private set
            {
                editando = value;
                OnPropertyChanged(nameof(Editando));
            }
        }


        private readonly Usuario usuario;

        public MasterViewModel(Usuario usuario)
        {
            this.usuario = usuario;
            EditarPerfilCommand = new Command(() => {

                MessagingCenter.Send<Usuario>(usuario, "EditarPerfil");

            });

            EditarCommand = new Command(() => {

                this.Editando = true;

            });

            SalvarCommand = new Command(() => {

                MessagingCenter.Send<Usuario>(usuario, "SalvarPerfil");
                this.Editando = false;
            });
        }

        public ICommand EditarCommand { get; set; }
        public ICommand EditarPerfilCommand { get; set; }
        public ICommand SalvarCommand { get; set; }
    }
}
