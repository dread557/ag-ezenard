import { IProduct } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

export interface ICartItem extends IProduct {
  quantity: number;
}

interface CartState {
  cart: ICartItem[];
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: ICartItem }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "CLEAR_CART" }
  | { type: "INCREASE_QUANTITY"; payload: { id: string } }
  | { type: "DECREASE_QUANTITY"; payload: { id: string } }
  | { type: "LOAD_CART"; payload: ICartItem[] };

const initialState: CartState = {
  cart: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
  getTotalPrice: () => number;
}>({ state: initialState, dispatch: () => null, getTotalPrice: () => 0 });

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "LOAD_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const getTotalPrice = () => {
    return state.cart.reduce((total, item) => {
      if (Array.isArray(item?.current_price)) {
        return total + item.quantity * item.current_price[0].NGN[0];
      } else {
        return total + item.quantity * item.current_price;
      }
    }, 0);
  };
  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await AsyncStorage.getItem("@cart");
        if (data) {
          dispatch({ type: "LOAD_CART", payload: JSON.parse(data) });
        }
      } catch (error) {
        console.error("Failed to load cart from AsyncStorage", error);
      }
    };

    loadCart();
  }, []);

  useEffect(() => {
    const saveCart = async () => {
      try {
        AsyncStorage.setItem("@cart", JSON.stringify(state.cart));
      } catch (error) {
        console.error("Failed to save cart to AsyncStorage", error);
      }
    };
    saveCart;
  }, [state.cart]);
  return (
    <CartContext.Provider value={{ state, dispatch, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
