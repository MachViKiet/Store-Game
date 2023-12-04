// Content
import TagList from "~/page/Content/Components/TagList/TagList";
import SlideStore from "~/page/Content/Components/SlideStore";
import ProductStore from "~/page/Content/Components/ProductStore";
import ProductDetail from "~/page/Content/Components/ProductDetail/ProductDetail";

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
import {sliderContent} from '~/apis/Home/Slider.js'
import { OutStandingProduct } from "~/apis/Home/Products/OutStandingProduct";
import { ActionProduct } from "~/apis/Home/Products/ActionProduct";
import {Simulating} from "~/apis/Home/Products/Simulating"
import CartFiled from "~/page/Content/CartFiled/CartFiled";

const publicPath = [
  {
    // Trang chủ
    path: "/store-game/",
    content: [
      { component: SlideStore, progs: sliderContent },
      { component: ProductStore, progs: OutStandingProduct },
      { component: TagList, progs: "" },
      { component: ProductStore, progs: ActionProduct },
      { component: ProductStore, progs: Simulating },
    ],
    layout: DefaultLayout,
  },

  {
    // Trang Home
    path: "/store-game/Home",
    content: [
      { component: SlideStore, progs: sliderContent },
      { component: ProductStore, progs: OutStandingProduct },
      { component: TagList, progs: "" },
      { component: ProductStore, progs: ActionProduct },
      { component: ProductStore, progs: Simulating },
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/product/:id/",
    content: [
      { component: ProductDetail},
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Action",
    content: [
      { component: ProductStore, progs: ActionProduct },
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Adventure",
    content: [
      { component: ProductStore },
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/RolePlaying",
    content: [
      { component: ProductStore },
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Strategy",
    content: [
      { component: ProductStore},
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Sport&Racing",
    content: [
      { component: ProductStore},
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Horror",
    content: [
      { component: ProductStore},
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Casual",
    content: [
      { component: ProductStore},
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Survival",
    content: [
      { component: ProductStore},
    ],
    layout: DefaultLayout,
  },

  {
    // Trang chủ
    path: "/store-game/Simulation",
    content: [
      { component: ProductStore, progs: Simulating },
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
    path: "/store-game/:id/cart",
    content: [
      { component: CartFiled, progs: Simulating },
    ],
    layout: DefaultLayout,
  },
];

const privatePath = [];

export const route = {
  publicPath,
  privatePath,
};
