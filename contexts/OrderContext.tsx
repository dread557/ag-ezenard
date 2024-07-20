import { IOrder } from "@/types";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface OrderContextProps {
  orders: IOrder[];
  addOrder: (order: IOrder) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const addOrder = (order: IOrder) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const ordersData = await AsyncStorage.getItem("@orders");
        if (ordersData) {
          setOrders(JSON.parse(ordersData));
        }
      } catch (error) {
        console.error("Failed to load orders from AsyncStorage", error);
      }
    };

    loadOrders();
  }, []);

  useEffect(() => {
    const saveOrders = async () => {
      try {
        await AsyncStorage.setItem("@orders", JSON.stringify(orders));
      } catch (error) {
        console.error("Failed to save orders to AsyncStorage", error);
      }
    };

    saveOrders();
  }, [orders]);

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
