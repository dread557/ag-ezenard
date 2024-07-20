export const capitalizeWords = (str: string) => {
  return str
    ?.split(" ")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    ?.join(" ");
};

export const shortenWords = (str: string, length?: number) => {
  if (length) {
    return str.length > length ? `${str.substring(0, length)}...` : str;
  } else return str.length > 12 ? `${str.substring(0, 12)}...` : str;
};

export const formatList = (data: any[], numColumns: number) => {
  const numOfFullRows = Math.floor(data.length / numColumns);
  let numOfElementsLastRow = data.length - numOfFullRows * numColumns;
  while (numOfElementsLastRow !== numColumns && numOfElementsLastRow !== 0) {
    data.push({
      name: "",
      description: "",
      unique_id: "",
      url_slug: "",
      is_available: true,
      is_service: false,
      previous_url_slugs: null,
      unavailable: false,
      unavailable_start: null,
      unavailable_end: null,
      id: `blank-${numOfElementsLastRow}`,
      parent_product_id: null,
      parent: null,
      organization_id: "123",
      stock_id: null,
      product_image: [],
      categories: [],
      date_created: "2024-03-25T12:02:50",
      last_updated: "2024-03-25T12:02:50",
      user_id: "37",
      photos: [],
      prices: null,
      stocks: null,
      is_deleted: false,
      available_quantity: null,
      selling_price: null,
      discounted_price: null,
      buying_price: null,
      extra_infos: null,
      featured_reviews: null,
      unavailability: [],
      empty: true,
    });
    numOfElementsLastRow = numOfElementsLastRow + 1;
  }
  return data;
};
