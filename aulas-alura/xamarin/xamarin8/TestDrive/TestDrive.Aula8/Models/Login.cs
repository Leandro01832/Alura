using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDrive.Models
{
    class Login
    {
        public string email { get; set; }
        public string senha { get; set; }

        public Login(string Email, string Senha)
        {
            this.email = Email;
            this.senha = Senha;
        }
    }
}
