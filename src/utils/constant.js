export const RESTAURANTS_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const RESTAURANTDETAILS_URL = (resId) => {
  return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
};

export const LOGO_URL =
  "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png";
export const RES_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const Search_api =
  "https://www.swiggy.com/dapi/misc/place-autocomplete?input=";
export const RES_MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.08950&lng=80.27390&restaurantId=708880&catalog_qa=undefined&submitAction=ENTER";
export const SEARCH_RES_API =
  "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=21.99740&lng=79.00110&str=";
export const SEARCH_RES_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/";
