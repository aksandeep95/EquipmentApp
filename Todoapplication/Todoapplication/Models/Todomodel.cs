using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Todoapplication.Models
{
    public class Todomodel
    {

        [Key]
        public int Id { get; set; }

        [Required]
	    public String Description { get; set; }

        [Required]
        public bool IsDone { get; set; }

    }
}
