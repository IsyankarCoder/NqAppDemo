using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NqApp.Model;

namespace NqApp.Model
{
    public class DataAccessLayer
    {
        NqApp.Data.NgAppDbContext dbContext;
        public DataAccessLayer()
        {
            dbContext = new Data.NgAppDbContext(new DbContextOptionsBuilder().Options);
        }
        public IEnumerable<TblEmployee> GetEmployees()
        {
            return dbContext.TblEmployee.ToList();
        }
    }
}
