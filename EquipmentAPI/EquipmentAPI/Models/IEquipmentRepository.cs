using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Models
{
    public interface IEquipmentRepository
    {
        void Add(EquipmentModel equipmentModel);

        IEnumerable<EquipmentModel> Getall();

        EquipmentModel Find(int equipmentid);

        EquipmentModel Remove(int equipmentid);

        void Update(EquipmentModel equipmentModel);
    }
}
