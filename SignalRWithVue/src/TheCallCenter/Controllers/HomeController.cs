using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using TheCallCenter.Data;
using TheCallCenter.Data.Entities;
using TheCallCenter.Hubs;
using TheCallCenter.Models;

namespace TheCallCenter.Controllers
{
    public class HomeController : Controller
    {
        private readonly CallCenterContext _context;
        private readonly IHubContext<CallHub, ICallHub> _hubContext;

        public HomeController(CallCenterContext context, IHubContext<CallHub, ICallHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        public IActionResult Index()
        {
            ViewBag.Message = "";
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(Call model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _context.Add(model);
                    if (await _context.SaveChangesAsync() > 0)
                    {
                        ViewBag.Message = "Problem Reported...";
                        ModelState.Clear();
                        await _hubContext.Clients.All.NewCall(model);
                    }
                    else
                    {
                        ViewBag.Message = "Failed to save new problem...";
                    }
                }
            }
            catch (Exception)
            {
                ViewBag.Message = "Threw exception trying to save call";
            }

            return View();
        }

        public IActionResult Privacy() => View();

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() =>
            View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });

        public IActionResult Calls() => View();
    }
}