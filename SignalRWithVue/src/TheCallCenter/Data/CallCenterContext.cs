using TheCallCenter.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace TheCallCenter.Data
{
    public class CallCenterContext : DbContext
    {
        private readonly IConfiguration _config;

        public CallCenterContext(IConfiguration config)
        {
            _config = config;
        }

        public DbSet<Call> Calls { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(_config.GetConnectionString("CallCenterConnectionString"));
        }
    }
}