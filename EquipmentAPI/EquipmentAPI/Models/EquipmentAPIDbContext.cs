using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Models
{
    public class EquipmentAPIDbContext : DbContext
    {
        public EquipmentAPIDbContext(DbContextOptions<EquipmentAPIDbContext> options) : base(options)
        {

        }

        public DbSet<EquipmentModel> equipmentModels { get; set; }
    }
}
