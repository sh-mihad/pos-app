
import { useContext, useState } from "react";
import { DataContext } from "../../context";
import ProductCategory from "./ProductCategory";
import ProductItem from "./ProductItem";
import ProductNavbar from "./ProductNavbar";

export default function Products() {
  const {products} = useContext(DataContext)
  const [filterTerms,setFilterTerms] = useState("")
  const [searchTerms,setSearchTerms] = useState("")

  const updatedProductsData = products?.filter(item=>item?.name.toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase()))?.filter(item=>{
    if(!filterTerms){
      return item
    }else{
      return item?.category === filterTerms
    }
  })
  return (
    <section className="w-full lg:w-[55%] bg-bgPrimary">
      <ProductNavbar setSearchTerms={setSearchTerms} />
      <ProductCategory products={products} filterTerms={filterTerms} setFilterTerms={setFilterTerms}/>

      <div className="grid grid-cols-5 gap-3 px-4 my-4 ">
        {
          updatedProductsData?.map(item=><ProductItem key={item?.id} item={item} />)
        }
      </div>
    </section>
  );
}
