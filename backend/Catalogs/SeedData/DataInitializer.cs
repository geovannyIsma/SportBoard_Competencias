using Catalogs.Data;
using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;
using System.Text.RegularExpressions;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace SeedData
{
    public static class DataInitializer
    {
        public static void SeedFromCsv(ApplicationDbContext context)
        {
            if (!context.Groups.Any() && !context.Catalogs.Any())
            {
                var config = new CsvConfiguration(CultureInfo.InvariantCulture)
                {
                    PrepareHeaderForMatch = args => Regex.Replace(args.Header, @"\s", string.Empty),
                };

                using (var reader = new StreamReader("SeedData/backup_groups.csv"))
                using (var csv = new CsvReader(reader, config))
                {
                    var groups = csv.GetRecords<Group>().ToList();
                    context.Groups.AddRange(groups);
                }

                using (var reader = new StreamReader("SeedData/backup_catalogs.csv"))
                using (var csv = new CsvReader(reader, config))
                {
                    var catalogs = csv.GetRecords<Catalog>().ToList();
                    context.Catalogs.AddRange(catalogs);
                }

                context.SaveChanges();
            }
        }
    }
}