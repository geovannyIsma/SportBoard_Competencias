using Microsoft.EntityFrameworkCore;
using Catalogs.Controllers;

namespace Catalogs.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Catalog> Catalogs { get; set; }
        public DbSet<Group> Groups { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Catalog>()
            .HasOne(c => c.Parent)
            .WithMany(c => c.Children)
            .HasForeignKey(c => c.IdCatalog)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Group>()
            .HasKey(g => g.Code);

            modelBuilder.Entity<Group>()
            .HasOne(g => g.Parent)
            .WithMany(g => g.Children)
            .HasForeignKey(g => g.ParentCode)
            .OnDelete(DeleteBehavior.Restrict);
        }
    }
}