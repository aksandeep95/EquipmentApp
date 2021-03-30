using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todoapplication.Models
{
    public class TodoAPIDbcontext:DbContext
    {
        public TodoAPIDbcontext(DbContextOptions<TodoAPIDbcontext> options) : base(options)
        {

        }

        public DbSet<Todomodel> todoModels { get; set; }
    }
}
