import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import MainPage from "./routes/MainPage";
import CatalogPage from "./routes/CatalogPage";
import Footer from "./pages/Footer";
import ShowRoomPage from "./routes/ShowRoomPage";
import FittingPage from "./routes/FittingPage";
import AboutTheBrandPage from "./routes/AboutTheBrandPage";
import ContactsPage from "./routes/ContactsPage";
import WishListPage from "./routes/WishListPage";
import DeliveryPage from "./routes/DeliveryPage";
import TestimonialsPage from "./routes/TestimonialsPage";
import ProductPage from "./routes/ProductPage";
import OrderingPage from "./routes/OrderingPage";
import Nav from "./routes/Nav";

import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./CartContext";
import ProductDetails from "./routes/ProductDetails";
import { FavoritesProvider } from "./FavoritesContext";
import ErrorPage from "./routes/ErrorPage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <CartProvider>
        <FavoritesProvider>
          <Nav />
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/showroom" element={<ShowRoomPage />} />
              <Route exact path="/fitting" element={<FittingPage />} />
              <Route
                exact
                path="/aboutthebrand"
                element={<AboutTheBrandPage />}
              />
              <Route exact path="/contacts" element={<ContactsPage />} />
              <Route exact path="/wishlist" element={<WishListPage />} />
              <Route exact path="*" element={<ErrorPage />} />
              <Route exact path="/delivery" element={<DeliveryPage />} />
              <Route
                exact
                path="/testimonials"
                element={<TestimonialsPage />}
              />
              <Route exact path="/catalog" element={<CatalogPage />} />
              <Route exact path="/catalog/:id" element={<ProductDetails />} />
              <Route exact path="/product" element={<ProductPage />} />
              <Route exact path="/checkout" element={<OrderingPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </FavoritesProvider>
      </CartProvider>
    </div>
  );
}

export default App;
