using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Models
{
    public class EquipmentRepository : IEquipmentRepository
    {

        private EquipmentAPIDbContext _equipmentAPIDbContext;

        public EquipmentRepository(EquipmentAPIDbContext equipmentAPIDbContext)
        {
            _equipmentAPIDbContext = equipmentAPIDbContext;
        }
        public void Add(EquipmentModel equipmentModel)
        {
            _equipmentAPIDbContext.equipmentModels.Add(equipmentModel);
            _equipmentAPIDbContext.SaveChanges();
        }

        public EquipmentModel Find(int equipmentid)
        {
            var equipment = _equipmentAPIDbContext.equipmentModels.Find(equipmentid);
            return equipment;
        }

        public IEnumerable<EquipmentModel> Getall()
        {
            return _equipmentAPIDbContext.equipmentModels.ToList();
        }

        public EquipmentModel Remove(int equipmentid)
        {
            var equipment = _equipmentAPIDbContext.equipmentModels.Find(equipmentid);
            _equipmentAPIDbContext.equipmentModels.Remove(equipment);
            _equipmentAPIDbContext.SaveChanges();
            return equipment;
        }

        public void Update(EquipmentModel equipmentModel)
        {
            _equipmentAPIDbContext.Update(equipmentModel);
            _equipmentAPIDbContext.SaveChanges();
        }
    }
}
