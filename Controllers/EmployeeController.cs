using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NqApp.Model;

namespace NqApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly DataAccessLayer Dal;
             
        public EmployeeController()
        {
            Dal = new DataAccessLayer();
        }


        [Route("api/Employee/Index")]
        public IActionResult Index()
        {
            var data = Dal.GetEmployees();
            return Ok(data);
        }
    }
}