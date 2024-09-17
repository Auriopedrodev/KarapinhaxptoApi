using KarapinhaXPTO.DAL.Context;
using KarapinhaXPTO.DAL.Repository;
using KarapinhaXPTO.Model;
using KarapinhaXPTO.Services;
using KarapinhaXPTO.Shared.IRepository;
using KarapinhaXPTO.Shared.Iservice;
using KarapinhaXPTOContext.Model;
using Kp.DAL.Repository;
using Kp.Services;
using Kp.Shared.IRepository;
using Microsoft.EntityFrameworkCore;
using ServiceStack;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.AddTransient<ICategoriaRepository, CategoriaRepository>();
builder.Services.AddTransient<ICategoriaService, CategoriaService>();
builder.Services.AddTransient<IPerfilService, PerfilService>();
builder.Services.AddTransient<IPerfilRepository, PerfilRepository>();
builder.Services.AddTransient<IUtilizadorService, UtilizadorService>();
builder.Services.AddTransient<IUtilizadorRepository, UtilizadorRepository>();
builder.Services.AddTransient<IServicoService, ServicoService>();
builder.Services.AddTransient<IServicoRepository, ServicoRepository>();
builder.Services.AddTransient<IHorarioService, HorarioService>();
builder.Services.AddTransient<ILoginServices, LoginService>();
builder.Services.AddTransient<IHorarioRepository, HorarioRepository>();
builder.Services.AddTransient<IProfissionalService, ProfissionalService>();
builder.Services.AddTransient<IProfissionalRepository, ProfissionalRepository>();
builder.Services.AddTransient<IProfissionalHorarioService, ProfissionalHorarioService>();
builder.Services.AddTransient<IProfissionalHorarioRepository, ProfissionalHorarioRepository>();
builder.Services.AddTransient<IMarcacaoService, MarcacaoService>();
builder.Services.AddTransient<IMarcacaoRepository, MarcacaoRepository>();
builder.Services.AddTransient<IMarcacaoServicoService, MarcacaoServicoService>();
builder.Services.AddTransient<IMarcacaoServicoRepository, MarcacaoServicoRepository>();

builder.Services.Configure<EmailStandard>(builder.Configuration.GetSection("EmailSettings"));
builder.Services.AddTransient<IEmailService, EmailService>();

var conn = builder.Configuration.GetValue("conn", builder.Configuration.GetConnectionString("Conn"));

builder.Services.AddDbContext<KarapinhaContext>(o => o.UseSqlServer(conn));
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.WriteIndented = true;
});


var app = builder.Build();

app.UseCors(x => x
            .AllowAnyMethod()
            .AllowAnyHeader()
            .SetIsOriginAllowed(origin => true)
            .AllowCredentials());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//Uso do Cors no localHost
app.UseCors("AllowLocalhost");

//Uso de arquivos estáticos "Imagens"
app.UseStaticFiles();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


