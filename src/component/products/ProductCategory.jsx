import interFaceImg from "../../assets/svg/interface.svg";

export default function ProductCategory({ products, filterTerms,setFilterTerms }) {
  const uniqueCategories = products.reduce((categories, product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
    return categories;
  }, []).slice(0,4);
 
  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setFilterTerms("")}
          className={`inline-block px-3 py-2 hover:text-info hover:border-info border rounded-md text-primary font-semibold text-sm ${!filterTerms?"text-danger":"text-info"}`}
        >
          All Categories
        </button>
        {uniqueCategories?.map((item) => (
          <button key={item} onClick={()=>setFilterTerms(item)} className="inline-block px-3 py-2 hover:text-info hover:border-info border rounded-md text-primary font-semibold text-sm">
           {item}
          </button>
        ))}

        
        <button className="inline-block px-3 py-2">
          <img src={interFaceImg} height="30px" width="30px" alt="" />
        </button>
      </div>
    </div>
  );
}
