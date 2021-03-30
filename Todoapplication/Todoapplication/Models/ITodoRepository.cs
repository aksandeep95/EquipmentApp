using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todoapplication.Models
{
    interface ITodoRepository
    {
        void Add(Todomodel todoModel);

        IEnumerable<Todomodel> Getall();

        Todomodel Find(int Id);

        Todomodel Remove(int Id);

        void Update(Todomodel todoModel);
    }
}
