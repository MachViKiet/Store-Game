import "./App.css";

import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { route } from "~/route/route";

import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const publicPath = route.publicPath;

  const [amountInCart, setAmountInCart] = useState(0);
  const [userName, setUserName] = useState("");
  const [wishlist, setWishList] = useState([]);
  const [cart, setCart] = useState([]);
  const [id, setID] = useState('');


  const user = {
    amountInCart: amountInCart,
    updateCart: () => {
      setAmountInCart((cur) => cur + 1);
    },
    userName: userName,
    wishlist: wishlist,
    cart: cart,
    id: id
  };

  useEffect(() => {
    const getInf = () => {

      fetch(
        `http://localhost:5000/api/user/getDetails-user/${localStorage.getItem(
          "user_id"
        )}`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((res) => {
          console.log("Server response:", res);
          if (res.status === "OK") {

            localStorage.setItem("accessToken", res.access_token);

            setUserName(res.data.name)
            setAmountInCart(res.data.cart.length())
            setWishList(res.data.wishlist)
            setCart(res.data.cart)
            setID(res.data.id)

            // XỬ lí data
          } else {
            localStorage.removeItem("accessToken");
          }

          // Xử lý phản hồi từ server tại đây
        })
        .catch((error) => {
          console.error("There was an error:", error);
          // Xử lý lỗi tại đây
        });
    };


    localStorage.getItem("user_id") && getInf() 
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path="/store-game/" exact element={<Layout />}></Route>
        <Route path="/store-game/login" element={<Login />}></Route>
        <Route path="/store-game/register" element={<Register />}></Route> */}
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
