import { IProduct } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

type State = {
  favorites: IProduct[];
};

type Action =
  | { type: "ADD_TO_FAVORITES"; payload: IProduct }
  | { type: "REMOVE_FROM_FAVORITES"; payload: string }
  | { type: "LOAD_WISHLIST"; payload: IProduct[] };
type Dispatch = (action: Action) => void;

const initialState = {
  favorites: [],
};

const favoriteReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((f) => f.id !== action.payload),
      };
    case "LOAD_WISHLIST":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const WishlistContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const WishListProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);
  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const data = await AsyncStorage.getItem("@wishlist");
        if (data) {
          dispatch({ type: "LOAD_WISHLIST", payload: JSON.parse(data) });
        }
      } catch (error) {
        console.error("Failed to load wishlist from AsyncStorage", error);
      }
    };

    loadWishlist();
  }, []);

  useEffect(() => {
    const saveWishlist = async () => {
      try {
        await AsyncStorage.setItem(
          "@wishlist",
          JSON.stringify(state.favorites)
        );
      } catch (error) {
        console.error("Failed to save wishlist to AsyncStorage", error);
      }
    };

    saveWishlist();
  }, [state.favorites]);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlistContext   is undefined");
  }
  return context;
};
