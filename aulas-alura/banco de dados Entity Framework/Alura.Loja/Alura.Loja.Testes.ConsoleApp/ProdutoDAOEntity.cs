using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alura.Loja.Testes.ConsoleApp
{
    class ProdutoDAOEntity : IProdutoDAO, IDisposable
    {
        private LojaContext contexto;

        public ProdutoDAOEntity()
        {
            contexto = new LojaContext();
        }

        public void Adicionar(Produto produto)
        {
            contexto.Produto.Add(produto);
            contexto.SaveChanges();
        }

        public void Atualizar(Produto produto)
        {
            contexto.Produto.Update(produto);
            contexto.SaveChanges();
        }

        public void Dispose()
        {
            
        }

        public IList<Produto> Produtos()
        {
            return contexto.Produto.ToList();
        }

        public void Remover(Produto produto)
        {
            contexto.Produto.Remove(produto);
            contexto.SaveChanges();
        }
    }
}
