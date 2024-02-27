import { useContext, useState } from "react";
import { DataContext } from "../../context";
import ProductCategory from "./ProductCategory";
import ProductItem from "./ProductItem";
import ProductNavbar from "./ProductNavbar";

export default function Products() {
  // get products from context
  const { products } = useContext(DataContext);

  // state for filter and search term
  const [filterTerms, setFilterTerms] = useState("");
  const [searchTerms, setSearchTerms] = useState("");

  // update products by filtering and searching for onThe fly rendering
  const updatedProductsData = products
    ?.filter((item) =>
      item?.name.toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase())
    )
    ?.filter((item) => {
      if (!filterTerms) {
        return item;
      } else {
        return item?.category === filterTerms;
      }
    });
  return (
    <section className="w-full lg:w-[55%] bg-bgPrimary">
      <ProductNavbar setSearchTerms={setSearchTerms} />
      <ProductCategory
        products={products}
        filterTerms={filterTerms}
        setFilterTerms={setFilterTerms}
      />

      {updatedProductsData?.length > 0 ? (
        <div className="grid grid-cols-5 gap-3 px-4 my-4 max-h-96 overflow-auto">
          {updatedProductsData?.map((item) => (
            <ProductItem key={item?.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-danger">No Product Found</p>
      )}
    </section>
  );
}
