using CasaDoCodigo.Models;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace CasaDoCodigo
{
    public interface IRelatorioHelper
    {
        Task GerarRelatorio(Pedido pedido);
    }

    public class RelatorioHelper : IRelatorioHelper
    {
        private const string RelativeUri = "api/Relatorio";
        private readonly IConfiguration configuration;


        //Problema: Não detecta mudanças no DNS
        // private static HttpClient httpClient;

        private readonly HttpClient httpClient;

        public RelatorioHelper(IConfiguration Configuration, HttpClient HttpClient)
        {
            configuration = Configuration;
            httpClient = HttpClient;
        }


        public async Task GerarRelatorio(Pedido pedido)
        {
            string linhaRelatorio = await GetLinhaRelatorio(pedido);

            // Exaustão de socket
            // using (HttpClient httpClient = new HttpClient())
           // using (HttpClient httpClient = HttpClientFactory.Create())
            //{
                // O texto do conteudo (Json)
               var json = JsonConvert.SerializeObject(linhaRelatorio);
                // O objeto HttpContent que enpacota o texto (application/json);
                HttpContent httpContent = new StringContent(json, Encoding.UTF8, "application/json");
                //Uri - identificador universal de recurso.

                //Endereço base >>> http://localhost:5002
                //Endereço relativo >>> /api/Relatorio
                Uri BaseUri = new Uri(configuration["RelatorioWebAPIURL"]);
                Uri uri = new Uri(BaseUri, RelativeUri);
              HttpResponseMessage httpResponseMessage = await httpClient.PostAsync(uri, httpContent);
                if (!httpResponseMessage.IsSuccessStatusCode)
                {
                    throw new ApplicationException(httpResponseMessage.ReasonPhrase);
                }
           // }  


        }

        private async Task<string> GetLinhaRelatorio(Pedido pedido)
        {
            StringBuilder sb = new StringBuilder();
            string templatePedido =
                    await System.IO.File.ReadAllTextAsync("TemplatePedido.txt");

            string templateItemPedido =
                await System.IO.File.ReadAllTextAsync("TemplateItemPedido.txt");

            string linhaPedido =
                string.Format(templatePedido,
                    pedido.Id,
                    pedido.Cadastro.Nome,
                    pedido.Cadastro.Endereco,
                    pedido.Cadastro.Complemento,
                    pedido.Cadastro.Bairro,
                    pedido.Cadastro.Municipio,
                    pedido.Cadastro.UF,
                    pedido.Cadastro.Telefone,
                    pedido.Cadastro.Email,
                    pedido.Itens.Sum(i => i.Subtotal));

            sb.AppendLine(linhaPedido);

            foreach (var i in pedido.Itens)
            {
                string linhaItemPedido =
                    string.Format(
                        templateItemPedido,
                        i.Produto.Codigo,
                        i.PrecoUnitario,
                        i.Produto.Nome,
                        i.Quantidade,
                        i.Subtotal);

                sb.AppendLine(linhaItemPedido);
            }
            sb.AppendLine($@"=============================================");

            return sb.ToString();
        }
    }
}