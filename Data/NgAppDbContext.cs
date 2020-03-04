using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NqApp.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace NqApp.Data
{
    public class NgAppDbContext
        :DbContext
    {
        public NgAppDbContext(DbContextOptions options) 
            : base(options)
        { 

        }

        public DbSet<TblEmployee> TblEmployee { get; set; }
        public DbSet<TblCities> TblCities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=DESKTOP-HIJBJ8J\\SQLEXPRESS;Database=NgApp;Trusted_Connection=True;MultipleActiveResultSets=True");

            base.OnConfiguring(optionsBuilder);
        }
    }
}
