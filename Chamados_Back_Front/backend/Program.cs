using System;
using System.IO;
using System.Collections.Generic;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Trabalho
{
	class Usuario
    {
		public int       Id          {get; set;}
		public string?   Cep         {get; set;}
    	public string?   Cpf         {get; set;}
    	public string?   Complemento {get; set;}
    	public string?   Email       {get; set;}
    	public string?   Logradouro  {get; set;}
    	public DateTime? Nascimento  {get; set;}
    	public string?   Nome        {get; set;}
    	public string?   Numero      {get; set;}
    	public string?   Password    {get; set;}
    	
    	//metodo para hash da senha (apenas para demonstracao, nao eh necessario login no trabalho)
    	static public string Hash(string password)
		{
			return BitConverter.ToString(SHA256.Create().ComputeHash(System.Text.Encoding.UTF8.GetBytes(password))).Replace("-", String.Empty);
		}
    }

	class Cliente
    {
		public int      id				{get; set;}
		public string?  nomeCliente		{get; set;}
		public string?  cpfCnpjCliente  {get; set;}
    	public string?  empresaCliente	{get; set;}
    }

	class Funcionario
    {
		public int       id      					{get; set;}
		public string?   nomeFuncionario        	{get; set;}
		public string?   cpfCnpjFuncionario			{get; set;}
    	public string?   especializacaoFuncionario  {get; set;}
    }

	class Chamado
    {
		public int      id      				{get; set;}
		public string?  statusChamado  			{get; set;}
		public string?  descricaoChamado       	{get; set;}
    	public string?  naturezaChamado			{get; set;}
		public long?	idClienteChamado		{get; set;}
		public long?   	idFuncionarioChamado	{get; set;}
    }		


	
	class Database : DbContext
	{
		public Database(DbContextOptions options) : base(options) {}
		public DbSet<Usuario> 		Usuarios 		{get; set;} = null!;
		//adicione dbsets para as demais entidades aqui
		public DbSet<Cliente> 		Clientes 		{get; set;} = null!;
		public DbSet<Funcionario> 	Funcionarios 	{get; set;} = null!;
		public DbSet<Chamado> 		Chamados 		{get; set;} = null!;
	}
	
	class Program
	{
		static void Main(string[] args)
		{
			///////////////////////////
			//CONFIGURACAO DA APLICACAO
			///////////////////////////
			
			//cria builder da aplicacao
			var builder = WebApplication.CreateBuilder(args);
			
			//adiciona database ao builder
			builder.Services.AddSqlite<Database>(builder.Configuration.GetConnectionString("Database") ?? "Data Source=Database.db");
			
			//adiciona politica permissiva de cross-origin ao builder
			builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
			
			//cria aplicacao usando o builder
			var app = builder.Build();
			
			//ativa a politica de cross-origin
			app.UseCors();
			
			/////////////////
			//CRUD DO USUARIO
			/////////////////
			
			//lista entidades
			app.MapGet("/usuarios", (Database database) =>
			{
				return database.Usuarios.ToList();
			});

			app.MapGet("/clientes", (Database database) =>
			{
				return database.Clientes.ToList();
			});

			app.MapGet("/funcionarios", (Database database) =>
			{
				return database.Funcionarios.ToList();
			});

			app.MapGet("/chamados", (Database database) =>
			{
				return database.Chamados.ToList();
			});
			
			//cria entidades
			app.MapPost("/usuarios", (Database database, Usuario usuario) =>
			{
				//valida email (que precisa ser unico)
				if(database.Usuarios.Where(u => u.Email == usuario.Email).Count() > 0)
				{
					return Results.Problem("email indisponivel");
				}
				//valida password para poder aplicar hash
				if(usuario.Password == null || usuario.Password.Length == 0)
				{
					return Results.Problem("password invalido");
				}
				usuario.Password = Usuario.Hash(usuario.Password);
				database.Usuarios.Add(usuario);
				database.SaveChanges();
				return Results.Ok();
			});

			app.MapPost("/clientes", (Database database, Cliente cliente) =>
			{
				//valida Cpf/Cnpj do cliente (que precisa ser unico)
				if(database.Clientes.Where(c => c.cpfCnpjCliente == cliente.cpfCnpjCliente).Count() > 0)
				{
					return Results.Problem("CPF/CNPJ indisponivel");
				}				
				database.Clientes.Add(cliente);
				database.SaveChanges();
				return Results.Ok();
			});

			app.MapPost("/funcionarios", (Database database, Funcionario funcionario) =>
			{
				//valida Cpf/Cnpj do Funcionario (que precisa ser unico)
				if(database.Funcionarios.Where(f => f.cpfCnpjFuncionario == funcionario.cpfCnpjFuncionario).Count() > 0)
				{
					return Results.Problem("CPF/CNPJ indisponivel");
				}				
				database.Funcionarios.Add(funcionario);
				database.SaveChanges();
				return Results.Ok();
			});

			app.MapPost("/chamados", (Database database, Chamado chamado) =>
			{
				//valida id do chamado (que precisa ser unico)
				if(database.Chamados.Where(c => c.id == chamado.id).Count() > 0)
				{
					return Results.Problem("id ja cadastrado");
				}				
				database.Chamados.Add(chamado);
				database.SaveChanges();
				return Results.Ok();
			});					
			
			//le entidades
			app.MapGet("/usuarios/{id}", (Database database, int id) =>
			{
				return database.Usuarios.Find(id);
			});

			app.MapGet("/clientes/{id}", (Database database, int id) =>
			{
				return database.Clientes.Find(id);
			});

			app.MapGet("/funcionarios/{id}", (Database database, int id) =>
			{
				return database.Funcionarios.Find(id);
			});

			app.MapGet("/chamados/{id}", (Database database, int id) =>
			{
				return database.Chamados.Find(id);
			});
			
			//atualiza entidades (apenas com os dados enviados no json)
			app.MapPut("/usuarios/{id}", (Database database, Usuario atualizado, int id) =>
			{
				var usuario = database.Usuarios.Find(id);
				if(usuario == null)
				{
					return Results.NotFound();
				}
				if(null != atualizado.Cep)         usuario.Cep         = atualizado.Cep;
				if(null != atualizado.Cpf)         usuario.Cpf         = atualizado.Cpf;
				if(null != atualizado.Complemento) usuario.Complemento = atualizado.Complemento;
				if(null != atualizado.Email)       usuario.Email       = atualizado.Email;
				if(null != atualizado.Logradouro)  usuario.Logradouro  = atualizado.Logradouro;
				if(null != atualizado.Nascimento)  usuario.Nascimento  = atualizado.Nascimento;
				if(null != atualizado.Nome)        usuario.Nome        = atualizado.Nome;
				if(null != atualizado.Numero)      usuario.Numero      = atualizado.Numero;
				database.SaveChanges();
				return Results.Ok();
			});

			app.MapPut("/clientes/{id}", (Database database, Cliente atualizado, int id) =>
			{
				var cliente = database.Clientes.Find(id);
				if(cliente == null)
				{
					return Results.NotFound();
				}
				if(null != atualizado.nomeCliente)		cliente.nomeCliente		= atualizado.nomeCliente;
				if(null != atualizado.cpfCnpjCliente)	cliente.cpfCnpjCliente	= atualizado.cpfCnpjCliente;
				if(null != atualizado.empresaCliente)	cliente.empresaCliente	= atualizado.empresaCliente;
				database.SaveChanges();
				return Results.Ok();
			});

			app.MapPut("/funcionarios/{id}", (Database database, Funcionario atualizado, int id) =>
			{
				var funcionario = database.Funcionarios.Find(id);
				if(funcionario == null)
				{
					return Results.NotFound();
				}
				if(null != atualizado.nomeFuncionario)				funcionario.nomeFuncionario				= atualizado.nomeFuncionario;
				if(null != atualizado.cpfCnpjFuncionario)			funcionario.cpfCnpjFuncionario			= atualizado.cpfCnpjFuncionario;
				if(null != atualizado.especializacaoFuncionario)	funcionario.especializacaoFuncionario	= atualizado.especializacaoFuncionario;
				database.SaveChanges();
				return Results.Ok();
			});

			app.MapPut("/chamados/{id}", (Database database, Chamado atualizado, int id) =>
			{
				var chamado = database.Chamados.Find(id);
				if(chamado == null)
				{
					return Results.NotFound();
				}
				if(null != atualizado.statusChamado)			chamado.statusChamado			= atualizado.statusChamado;
				if(null != atualizado.descricaoChamado)			chamado.descricaoChamado		= atualizado.descricaoChamado;
				if(null != atualizado.naturezaChamado)			chamado.naturezaChamado			= atualizado.naturezaChamado;
				if(null != atualizado.idClienteChamado)			chamado.idClienteChamado		= atualizado.idClienteChamado;
				if(null != atualizado.idFuncionarioChamado)		chamado.idFuncionarioChamado	= atualizado.idFuncionarioChamado;
				database.SaveChanges();
				return Results.Ok();
			});			
			
			//deleta entidades
			app.MapDelete("/usuarios/{id}", (Database database, int id) =>
			{
				var usuario = database.Usuarios.Find(id);
				if(usuario == null)
				{
					return Results.NotFound();
				}
				database.Remove(usuario);
				database.SaveChanges();
				return Results.Ok();
			});

			app.MapDelete("/clientes/{id}", (Database database, int id) =>
			{
				var cliente = database.Clientes.Find(id);
				if(cliente == null)
				{
					return Results.NotFound();
				}
				database.Remove(cliente);
				database.SaveChanges();
				return Results.Ok();
			});

			app.MapDelete("/funcionarios/{id}", (Database database, int id) =>
			{
				var funcionario = database.Funcionarios.Find(id);
				if(funcionario == null)
				{
					return Results.NotFound();
				}
				database.Remove(funcionario);
				database.SaveChanges();
				return Results.Ok();
			});

			app.MapDelete("/Chamados/{id}", (Database database, int id) =>
			{
				var chamado = database.Chamados.Find(id);
				if(chamado == null)
				{
					return Results.NotFound();
				}
				database.Remove(chamado);
				database.SaveChanges();
				return Results.Ok();
			});
			
			///////////////////////
			//EXECUCAO DA APLICACAO
			///////////////////////
			
			//roda aplicacao na porta 3000 (arbitraria)
			app.Run("http://localhost:3000");
		}
	}
}
