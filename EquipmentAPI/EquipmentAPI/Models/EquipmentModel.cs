using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Models
{
    public class EquipmentModel
    {
        [Key]

        public int EquipmentId { get; set; }

        [Required]
        public string EquipmentName { get; set; }

        [Required]
        public string EquipmentAmount { get; set; }

        [Required]

        [DataType(DataType.Date)]
        public DateTime EquipmentPurchaseDate { get; set; }

    }
}
