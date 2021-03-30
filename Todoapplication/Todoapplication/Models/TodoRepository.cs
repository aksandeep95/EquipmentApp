using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todoapplication.Models
{
    public class TodoRepository : ITodoRepository
    {

        private TodoAPIDbcontext _todoAPIDbContext;

        public TodoRepository(TodoAPIDbcontext todoAPIDbContext)
        {
            _todoAPIDbContext = todoAPIDbContext;
        }
        public void Add(Todomodel todoModel)
        {
            _todoAPIDbContext.todoModels.Add(todoModel);
            _todoAPIDbContext.SaveChanges();
        }

        public Todomodel Find(int Id)
        {
            var todolist = _todoAPIDbContext.todoModels.Find(Id);
            return todolist;
        }

        public IEnumerable<Todomodel> Getall()
        {
            return _todoAPIDbContext.todoModels.ToList();
        }

        public Todomodel Remove(int Id)
        {
            var todos = _todoAPIDbContext.todoModels.Find(Id);
            _todoAPIDbContext.todoModels.Remove(todos);
            _todoAPIDbContext.SaveChanges();
            return todos;
        }

        public void Update(Todomodel todoModel)
        {
            _todoAPIDbContext.Update(todoModel);
            _todoAPIDbContext.SaveChanges();
        }
    }
}
