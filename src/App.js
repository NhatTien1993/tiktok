import { Fragment } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { DefaultLayout } from "./components/Layout";
import { pubicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1> Tiktok clone 1</h1> */}
        <Routes>
          {pubicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout
            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
