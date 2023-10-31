import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { route } from "~/route/route";

import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";

function App() {
  const publicPath = route.publicPath;
  return (
    <>
      <Routes>
        {/* <Route path="/store-game/" exact element={<Layout />}></Route>
        <Route path="/store-game/login" element={<Login />}></Route>
        <Route path="/store-game/register" element={<Register />}></Route> */}
        {publicPath.map((route, index) => {
          console.log(route)
          let contents = route.content;
          let path = route.path;
          let Layout = route?.layout ? route.layout : DefaultLayout;
          return (
            <>
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    {
                    contents.map((content, index) => {
                      let progs = content?.progs ? content.progs : "empty"
                      let Component = content?.component ? content.component : content;
                      return <Component key={index} progs = {progs} />;
                    })
                    }
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
