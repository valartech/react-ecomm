const repo = "/react-ecomm";

// export const HOME = process.env.NODE_ENV === "development" ? "/" : `${repo}/`;
// export const CART =
//   process.env.NODE_ENV === "development" ? "/cart" : `${repo}/cart`;

export const BASE_URL = process.env.NODE_ENV === "development" ? "" : repo;
