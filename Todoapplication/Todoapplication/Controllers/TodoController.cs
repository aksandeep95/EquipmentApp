using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Todoapplication.Models;

namespace Todoapplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
       public ITodoRepository _itodorepository { get; set; }

        public TodoController(ITodoRepository todoRepository)
        {
            _itodorepository = todoRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Todomodel> TodoModels = _itodorepository.Getall();
            return Ok(TodoModels);
        }

        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            Todomodel TodoModel = _itodorepository.Find(id);
            if (TodoModel == null)
            {
                return NotFound("No Hotel");
            }
            return Ok(TodoModel);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Todomodel TodoModel)
        {
            if (TodoModel == null)
            {
                return BadRequest("No Hotel");
            }

            if (ModelState.IsValid)
            {
                _itodorepository.Add(TodoModel);
                return Ok(TodoModel);

            }
            return BadRequest("Invalid Entries");

        }

        [HttpPut]
        public IActionResult Put([FromBody] Todomodel TodoModel)
        {
            if (TodoModel == null)
            {
                return BadRequest("Todo is Null");
            }
            _itodorepository.Update(TodoModel);
            return Ok(TodoModel);

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _itodorepository.Remove(id);
            return NoContent();
        }
    }
}
