using CasaDoCodigo.Models;
using CasaDoCodigo.Models.ViewModels;
using CasaDoCodigo.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CasaDoCodigo.Controllers
{
    public class PedidoController : Controller
    {
        private readonly IProdutoRepository repostory;
        private readonly IPedidoRepository Pedidorepostory;
        private readonly IItemPedidoRepository ItemPedidorepostory;

        public PedidoController(IProdutoRepository repostory, IPedidoRepository Pedidorepostory, IItemPedidoRepository ItemPedidorepostory)
        {
            this.repostory = repostory;
            this.Pedidorepostory = Pedidorepostory;
            this.ItemPedidorepostory = ItemPedidorepostory;
        }

        public IActionResult Carrossel()
        {
            return View(repostory.GetProdutos());
        }

        public IActionResult Carrinho(string codigo)
        {
            if (!string.IsNullOrEmpty(codigo))
            {
                Pedidorepostory.AddItem(codigo);
            }


            List<ItemPedido> itens = Pedidorepostory.GetPedido().Itens;
            CarrinhoViewModel carrinhoViewModel = new CarrinhoViewModel(itens);
            return base.View(carrinhoViewModel);
        }

        public IActionResult Cadastro()
        {
            var pedido = Pedidorepostory.GetPedido();
            if (pedido == null)
            {
                RedirectToAction("Carrossel");
            }
            return View(pedido.Cadastro);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Resumo(Cadastro cadastro)
        {
            if (ModelState.IsValid)
            {
                return View(Pedidorepostory.updateCadastro(cadastro));
            }

            return RedirectToAction("Cadastro");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public UpdateQuantidadeResponse UpdateQuantidade([FromBody]ItemPedido itemPedido)
        {
           return Pedidorepostory.UpdateQuantidade(itemPedido);
        }
    }
}
