import { useState, useEffect } from "react";
import axios from "axios";
import { ICategoryProducts, IProduct } from "@/types";
import { API_KEY, APP_ID, ORGANIZATION_ID, API_URL } from "@env";

const useGetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/products`, {
          params: {
            organization_id: ORGANIZATION_ID,
            reverse_sort: "false",
            page: 1,
            size: 20,
            Appid: APP_ID,
            Apikey: API_KEY,
          },
        });
        const products: IProduct[] = res.data.items;
        // Fetch additional data for each product
        const productsWithAdditionalData = await Promise.all(
          products.map(async (product) => {
            try {
              const additionalDataRes = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/extrainfo/products/${product.id}`
              );
              const additionalData = additionalDataRes.data;
              const brand = additionalData.find(
                (info: any) => info.key === "brand"
              )?.value;
              const rating = additionalData.find(
                (info: any) => info.key === "rating"
              )?.value;
              return {
                ...product,
                brand,
                rating,
              };
            } catch (error) {
              console.error(
                "Error fetching additional data for product:",
                product.id,
                error
              );
              return product; // Return the original product if the additional data fetch fails
            }
          })
        );

        setProducts(productsWithAdditionalData);
      } catch (error) {
        console.error("Network error:", error);
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.message);
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleCloseAlert = () => {
    setError(false);
  };

  return { products, loading, error, handleCloseAlert };
};

export default useGetProducts;
