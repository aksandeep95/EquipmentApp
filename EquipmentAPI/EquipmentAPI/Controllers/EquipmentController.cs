using EquipmentAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {
        public IEquipmentRepository _iequipmentrepository { get; set; }

        public EquipmentController(IEquipmentRepository equipmentRepository)
        {
            _iequipmentrepository = equipmentRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<EquipmentModel> equipmentModels = _iequipmentrepository.Getall();
            return Ok(equipmentModels);
        }

        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            EquipmentModel equipmentModel = _iequipmentrepository.Find(id);
            if(equipmentModel == null)
            {
                return NotFound("No Hotel");
            }
            return Ok(equipmentModel);        
        } 

        [HttpPost]
        public IActionResult Post([FromBody]EquipmentModel equipmentModel)
        {
            if(equipmentModel == null)
            {
                return BadRequest("Equipment is Null");
            }
            _iequipmentrepository.Add(equipmentModel);
            return Ok(equipmentModel);

        }

        [HttpPut]
        public IActionResult Put([FromBody] EquipmentModel equipmentModel)
        {
            if (equipmentModel == null)
            {
                return BadRequest("Equipment is Null");
            }
            _iequipmentrepository.Update(equipmentModel);
            return Ok(equipmentModel);

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _iequipmentrepository.Remove(id);
            return NoContent();
        }
    }
}
