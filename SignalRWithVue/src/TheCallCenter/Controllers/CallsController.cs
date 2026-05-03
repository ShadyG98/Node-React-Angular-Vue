using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheCallCenter.Data;

namespace TheCallCenter.Controllers
{
    [ApiController]
    [Route("api/calls")]
    public class CallsController : Controller
    {
        private readonly CallCenterContext _context;

        public CallsController(CallCenterContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var calls = await _context.Calls
                .Where(c => !c.Answered)
                .ToListAsync();

            return Ok(calls);
        }

        [HttpPatch("{id:int}/answer")]
        public async Task<IActionResult> Patch(int id)
        {
            var call = await _context.Calls.FindAsync(id);
            if (call == null) return NotFound();

            call.Answered = true;
            call.AnswerTime = DateTime.UtcNow;

            if (await _context.SaveChangesAsync() > 0)
            {
                return Ok(new { success = true });
            }

            return BadRequest("Database Error");
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var call = await _context.Calls.FindAsync(id);
            if (call == null) return NotFound();

            _context.Remove(call);
            if (await _context.SaveChangesAsync() > 0)
            {
                return Ok(new { success = true });
            }

            return BadRequest("Database Error");
        }
    }
}