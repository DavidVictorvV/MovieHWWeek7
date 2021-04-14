using System;

namespace MovieHWWeek7.Models
{
    public class Movie
    {

        public Guid ID { get; set; }

        public string MovieName { get; set; }

        public string Genre { get; set; }

        public int MovieLength { get; set; }

        public DateTime ReleaseDate { get; set; }
    }
}
