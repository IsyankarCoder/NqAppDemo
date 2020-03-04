using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NqApp.Model
{
    public class TblCities
    {
        [Key]
        public int CityId { get; set; }
        public string CityName { get; set; }
    }
}
