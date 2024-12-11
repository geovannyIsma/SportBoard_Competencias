
public class Catalog : Component
{

    // Propiedad de la llave primaria
    public int Id { get; set; }

    // Relaciones

    public int? IdCatalog { get; set; }
    public Catalog? Parent { get; set; }

    public List<Catalog>? Children { get; set; }

    public string GroupCode { get; set; }
    public Group? group { get; set; }

    // Constructores
    public Catalog()
    {
        this.Children = new List<Catalog>();
    }

    public Catalog(string name, Group group) : this()
    {
        this.Name = name;
        this.group = group;
    }

    public Catalog(string code, string name, Group group) : this(name, group)
    {
        this.Code = code;
    }

    public void AddChild(Catalog catalog)
    {
        this.Children.Add(catalog);
        catalog.Parent = this;
    }

    public void AddGroup(Group group)
    {
        this.group = group;
        group.AddCatalog(this);
    }

    public static List<Catalog> GetCatalogsByGroup(Group group)
    {
        List<Catalog> catalogs = new List<Catalog>();
        foreach (Catalog catalog in group.CatalogList)
        {
            catalogs.Add(catalog);
        }
        return catalogs;
    }

}