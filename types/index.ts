export interface IPhoto {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: number;
}

export interface ICategory {
  organization_id: string;
  name: string;
  position: number | null;
  category_type: string;
  description: string;
  last_updated: string;
  id: string;
  parent_id: string | null;
  url_slug: string | null;
  is_deleted: boolean;
  date_created: string;
  subcategories: ICategory[];
  parents: ICategory[];
}

export interface IPrice {
  [currency: string]: [number, null, any[]];
}

export interface IProduct {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  brand?: string;
  rating?: string;
  product_image: any[];
  categories: ICategory[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: IPhoto[];
  current_price: IPrice[] | number;
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: any;
}

export interface ICategoryProducts {
  [key: string]: IProduct[];
}

export interface ICheckoutForm {
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
}

export interface IOrder {
  reference: string;
  date: string;
  amount: number;
  status: string;
  products: {
    id: string;
    name: string;
    image: any;
    quantity: number;
    price: number | null;
  }[];
}
