using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MovieHWWeek7.Models;

namespace MovieHWWeek7.Data
{
    public class MovieHWWeek7Context : DbContext
    {
        public DbSet<MovieHWWeek7.Models.Movie> Movie { get; set; }
        public MovieHWWeek7Context (DbContextOptions<MovieHWWeek7Context> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Models.Movie>().HasData(new Models.Movie() { ID = Guid.NewGuid(), MovieName = "StarWars", Genre = "Action", MovieLength= 80, ReleaseDate = new DateTime(1,1,1) });
        }
    }
}
