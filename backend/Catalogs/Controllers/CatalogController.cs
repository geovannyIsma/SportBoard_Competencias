// se imoporta la libreria de asp.net core
using Microsoft.AspNetCore.Mvc;
using Catalogs.Data;
using Microsoft.EntityFrameworkCore;

namespace Catalogs.Controllers
{
    [Route("api/catalogs")]
    [ApiController]
    public class CatalogController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public CatalogController(ApplicationDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Obtiene todos los catálogos.
        /// </summary>
        /// <returns>Una lista de catálogos.</returns>
        // GET: api/catalogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Catalog>>> GetCatalogs()
        {
            return await _context.Catalogs.ToListAsync();
        }

        // GET: api/catalogs/id
        /// <summary>
        /// Obtiene un catálogo por ID.
        /// </summary>
        /// <param name="id">ID del catálogo.</param>
        /// <returns>El catálogo solicitado.</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Catalog>> GetCatalog(int id)
        {
            var catalog = await _context.Catalogs.FindAsync(id);

            if (catalog == null)
            {
                return NotFound();
            }

            return catalog;
        }

        /// <summary>
        /// Obtiene los catálogos por el código del grupo.
        /// </summary>
        /// <param name="groupCode">Código del grupo.</param>
        /// <returns>Una lista de catálogos.</returns>
        [HttpGet("group/")]
        public async Task<ActionResult<IEnumerable<Catalog>>> GetCatalogsByGroupCode(string groupCode)
        {
            var catalogs = await _context.Catalogs
                .Where(c => c.GroupCode == groupCode)
                .ToListAsync();

            if (catalogs == null || !catalogs.Any())
            {
                return NotFound();
            }

            return catalogs;
        }

        // POST: api/catalogs
        /// <summary>
        /// Crea un nuevo catálogo.
        /// </summary>
        /// <param name="catalog">El catálogo a crear.</param>
        /// <returns>El catálogo creado.</returns>
        [HttpPost]
        public async Task<ActionResult<Catalog>> PostCatalog(Catalog catalog)
        {
            _context.Catalogs.Add(catalog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCatalog", new { id = catalog.Id }, catalog);
        }

        // PUT: api/catalogs/id
        /// <summary>
        /// Actualiza un catálogo existente.
        /// </summary>
        /// <param name="id">ID del catálogo a actualizar.</param>
        /// <param name="catalog">El catálogo actualizado.</param>
        /// <returns>Una respuesta HTTP.</returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCatalog(int id, Catalog catalog)
        {
            if (id != catalog.Id)
            {
                return BadRequest();
            }

            _context.Entry(catalog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CatalogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/catalogs/id
        /// <summary>
        /// Elimina un catálogo por ID.
        /// </summary>
        /// <param name="id">ID del catálogo a eliminar.</param>
        /// <returns>El catálogo eliminado.</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Catalog>> DeleteCatalog(int id)
        {
            var catalog = await _context.Catalogs.FindAsync(id);
            if (catalog == null)
            {
                return NotFound();
            }

            _context.Catalogs.Remove(catalog);
            await _context.SaveChangesAsync();

            return catalog;
        }

        private bool CatalogExists(int id)
        {
            return _context.Catalogs.Any(e => e.Id == id);
        }
    }
}