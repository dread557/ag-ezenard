import { useState, useEffect } from "react";
import axios from "axios";
import { ICategoryProducts, IProduct } from "@/types";

const useGetProducts = (categorize = true) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsByCategory, setProductsByCategory] =
    useState<ICategoryProducts>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://api.timbu.cloud/products", {
          params: {
            organization_id: process.env.EXPO_PUBLIC_ORGANIZATION_ID,
            reverse_sort: "false",
            page: 1,
            size: 12,
            Appid: process.env.EXPO_PUBLIC_APP_ID,
            Apikey: process.env.EXPO_PUBLIC_API_KEY,
          },
        });

        const products: IProduct[] = res.data.items;
        setProducts(products);

        if (categorize) {
          const categoryProducts: ICategoryProducts = {};
          products.forEach((product) => {
            product.categories.forEach((category) => {
              if (!categoryProducts[category.name]) {
                categoryProducts[category.name] = [];
              }
              categoryProducts[category.name].push(product);
            });
          });

          setProductsByCategory(categoryProducts);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categorize]);

  const handleCloseAlert = () => {
    setError(false);
  };

  return { products, productsByCategory, loading, error, handleCloseAlert };
};

export default useGetProducts;
