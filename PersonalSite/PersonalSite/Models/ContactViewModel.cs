using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PersonalSite.Models
{
    public class contactViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [RegularExpression(@"^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$", ErrorMessage = "Please Provide a Valid Email")]
        public string EmailAdress { get; set; }

        [Required(ErrorMessage = " Oh NO BRO!!")]
        [UIHint("MultilineText")]
        public string Message { get; set; }

        public string Zodiac { get; set; }

    }
}