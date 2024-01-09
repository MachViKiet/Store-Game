import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { route } from "~/route/route";
import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import { useState } from "react";
import { useEffect } from "react";
import { getUserInf as user_api } from "~/apis/User";
import { ChatBubble } from "~/page/ChatBot/ChatBubble";

function App() {
  const publicPath = route.publicPath;

  const [amountInCart, setAmountInCart] = useState(0);
  const [userName, setUserName] = useState("");
  const [wishlist, setWishList] = useState([]);
  const [cart, setCart] = useState([]);
  const [id, setID] = useState("");
  const [role, setRole] = useState("");

  const user = {
    amountInCart: amountInCart,
    updateCart: () => {
      setAmountInCart((cur) => cur + 1);
    },
    removeCart: () => {
      setAmountInCart((cur) => cur - 1);
    },
    removeAllCart: () => {
      setAmountInCart(0);
    },
    removeAllCartList: () => {
      setCart([]);
    },
    userName: userName,
    wishlist: wishlist,
    cart: cart,
    id: id,
    role: role
  };

  useEffect(() => {
    const getUserInf = (userID) =>
    {
      user_api(userID)
        .then((res) => {
          if (res.status === "OK") {
            setUserName(res.data.name);
            setAmountInCart(res.data.cart.length);
            setWishList(res.data.wishlist);
            setCart(res.data.cart);
            setID(res.data._id);
            setRole(res.data.role)
            // XỬ lí data

            
          } else {
            localStorage.removeItem("accessToken");
          }
        })
        .catch((error) => {
          console.error("There was an error:", error);
        });
    }

    localStorage.getItem("user_id") &&
      getUserInf(localStorage.getItem("user_id"));
  }, []);

  return (
    <>
      <Routes>
        {publicPath.map((route, index) => {
          let contents = route.content;
          let path = route.path;
          let Layout = route?.layout ? route.layout : DefaultLayout;
          return (
            <>
              <Route
                key={index}
                path={path}
                element={
                  <Layout progs={user}>
                    {contents.map((content, index) => {
                      let progs = content?.progs ? content.progs : "empty";
                      let Component = content?.component
                        ? content.component
                        : content;
                      return (
                        <Component key={index} progs={progs} user={user} />
                      );
                    })}
                  </Layout>
                }
              />
            </>
          );
        })}
      </Routes>

      <div>
        <ChatBubble />
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
