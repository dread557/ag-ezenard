import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { IProduct } from "@/types";
import { API_KEY, APP_ID, ORGANIZATION_ID, API_URL } from "@env";

const useGetSingleProduct = (id: string) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getProduct = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/products/${id}`, {
        params: {
          organization_id: ORGANIZATION_ID,
          Appid: APP_ID,
          Apikey: API_KEY,
        },
      });

      const product: IProduct = res.data;
      setProduct(product);
    } catch (error) {
      console.error("Network error:", error);
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const handleCloseAlert = () => {
    setError(false);
  };

  return { product, loading, error, handleCloseAlert, refetch: getProduct };
};

export default useGetSingleProduct;
