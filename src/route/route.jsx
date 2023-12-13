// Content
import TagList from "~/page/Content/Components/TagList/TagList";
import SlideStore from "~/page/Content/Components/SlideStore";
import ProductStore from "~/page/Content/Components/ProductStore";
import ProductDetail from "~/page/Content/Components/ProductDetail/ProductDetail";
import WishlistContainer from "~/page/Content/Components/WishlistContainer/WishlistContainer";
// Auth
import Login from "~/page/Auth/Login/Login";
import Register from "~/page/Auth/Register/Register";

// Layout
import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import NoneHeaderAndFooter from "~/layouts/NoneHeaderAndFooter/NoneHeaderAndFooter";

// Page 
import News from "~/page/Content/News/News";
import Contact from "~/page/Content/Contact/Contact"

// Apis
import CartFiled from "~/page/Content/CartFiled/CartFiled";
import { SliderAPI } from "~/apis/Slider.js";
import { getProductByCategory } from "../apis/Product_api/ProductByCategory/getProductByCategory";

const publicPath = [
  {
    // Trang chủ
    path: "/store-game/",
    content: [
      { component: SlideStore, progs: SliderAPI },
      // { component: ProductStore, progs: { getProduct : getPopularProduct() }},
      { component: ProductStore, progs: { getProduct : getProductByCategory('Action') , title: 'Action'}} ,
      { component: TagList, progs: "" },
      { component: WishlistContainer } ,
      { component: ProductStore, progs: { getProduct : getProductByCategory('Adventure') , title: 'Adventure'}} ,
      { component: ProductStore, progs: { getProduct : getProductByCategory('Horror') , title: 'Horror'}} ,
      { component: ProductStore, progs: { getProduct : getProductByCategory('Sports & Racing') , title: 'Sports & Racing'}} ,
      { component: ProductStore, progs: { getProduct : getProductByCategory('Survival'), title: 'Survival'  }},
      { component: ProductStore, progs: { getProduct : getProductByCategory('Casual'), title: 'Casual'  }},
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Home",
    content: [
      { component: SlideStore, progs: SliderAPI },
      { component: ProductStore, progs: { getProduct : getProductByCategory('Action') , title: 'Action'}} ,
      { component: TagList, progs: "" },
      { component: WishlistContainer } ,
      { component: ProductStore, progs: { getProduct : getProductByCategory('Adventure') , title: 'Adventure'}} ,
      { component: ProductStore, progs: { getProduct : getProductByCategory('Horror') , title: 'Horror'}} ,
      { component: ProductStore, progs: { getProduct : getProductByCategory('Sports & Racing') , title: 'Sports & Racing'}} ,
      { component: ProductStore, progs: { getProduct : getProductByCategory('Survival'), title: 'Survival'  }},
      { component: ProductStore, progs: { getProduct : getProductByCategory('Casual'), title: 'Casual'  }},
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/product/:id",
    content: [
      { component: ProductDetail},
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Action",
    content: [
      { component: ProductStore, progs: { getProduct : getProductByCategory('Action') , title: 'Action'}} 
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Adventure",
    content: [
      { component: ProductStore, progs: { getProduct : getProductByCategory('Adventure') , title: 'Adventure'}} 
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Role Playing",
    content: [
      { component: ProductStore, progs: { getProduct : getProductByCategory('Role Playing') , title: 'RolePlaying'}} 

    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Strategy",
    content: [
      { component: ProductStore, progs: { getProduct : getProductByCategory('Strategy') , title: 'Strategy'}} 
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Sport&Racing",
    content: [
      { component: ProductStore, progs: { getProduct : getProductByCategory('Sport & Racing') , title: 'Sport&Racing'}} 

    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Horror",
    content: [
      { component: ProductStore, progs: { getProduct : getProductByCategory('Horror') , title: 'Horror'}} 
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Casual",
    content: [
      { component: ProductStore, progs: { getProduct : getProductByCategory('Casual') , title: 'Casual'}} 
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Survival",
    content: [
      { component: ProductStore, progs: { getProduct : getProductByCategory('Survival') , title: 'Survival'}} 
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Simulation",
    content: [
      { component: ProductStore, progs: { getProduct : getProductByCategory('Simulation') , title: 'Simulation'}} 
    ],
    layout: DefaultLayout,
  },

  {
    // Trang News
    path: "/store-game/News",
    content: [News],
    layout: DefaultLayout,
  },

  {
    // Trang Contact
    path: "/store-game/Contact",
    content: [Contact],
    layout: DefaultLayout,
  },

  //   Auth
  {
    path: "/store-game/login",
    content: [Login],
    layout: NoneHeaderAndFooter,
  },
  {
    path: "/store-game/register",
    content: [Register],
    layout: NoneHeaderAndFooter,
  },

  {
    // Cart
    path: "/store-game/cart",
    content: [
      { component: CartFiled },
    ],
    layout: DefaultLayout,
  },
];

const privatePath = [];

export const route = {
  publicPath,
  privatePath,
};
