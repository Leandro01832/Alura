using CasaDoCodigo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CasaDoCodigo.Repositories
{
   public interface ICadastroRepository
    {
        Cadastro Update(int cadastroId, Cadastro novoCadastro);
    }

    public class CadastroRepository : BaseRepository<Cadastro>, ICadastroRepository
    {
        public CadastroRepository(AplicationContext contexto) : base(contexto)
        {
        }

        public Cadastro Update(int cadastroId, Cadastro novoCadastro)
        {
            var cadastroDb = dbSet.Include(p => p.Pedido).Where(c => c.Id == cadastroId).SingleOrDefault();

            if(cadastroDb == null)
            {
                throw new ArgumentException("");
            }

            cadastroDb.Update(novoCadastro);
            contexto.SaveChanges();
            return cadastroDb;

        }
    }
}
