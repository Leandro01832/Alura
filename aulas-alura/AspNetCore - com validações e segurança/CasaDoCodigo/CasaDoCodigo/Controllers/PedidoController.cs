using CasaDoCodigo.Models;
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

            Pedido pedido = Pedidorepostory.GetPedido();
            return View(pedido.Itens);
        }

        public IActionResult Cadastro()
        {
            return View();
        }

        public IActionResult Resumo()
        {
            Pedido pedido = Pedidorepostory.GetPedido();
            return View(pedido);
        }

        [HttpPost]
        public void UpdateQuantidade([FromBody]ItemPedido itemPedido)
        {
            ItemPedidorepostory.UpdateQuantidade(itemPedido);
        }
    }
}
