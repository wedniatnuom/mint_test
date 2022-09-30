import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Navigation from "./components/Navbar";
import MyListings from "./pages/MyListings";
import Login from "./pages/LoginSignup";
import Footer from "./components/Footer";
import WishList from './pages/WishList';
// import Cart from './pages/Cart';
// import CreateListing from './pages/CreateListing'

// categories 
import Antiques from "./pages/categories/Antiques";
import ComicBooks from "./pages/categories/ComicBooks";
import Stamps from "./pages/categories/Stamps";
import ToysAndFigures from "./pages/categories/ToysAndFigures";
import TradingCards from "./pages/categories/TradingCards";
import VintageClothes from "./pages/categories/VintageClothes";
import VinylRecords from "./pages/categories/VinylRecords";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
      <Router>
        <div>
          <Routes>

            <Route
              path="/"
              element={<Home />} />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/mylisting"
              element={<MyListings />}
            />
            <Route
              path="/wishlist"
              element={<WishList />}
            />
            <Route
              path="/antiques"
              element={<Antiques />}
            />
            <Route
              path="/comicbooks"
              element={<ComicBooks />}
            />
            <Route
              path="/stamps"
              element={<Stamps />}
            />
            <Route
              path="/toysandfigures"
              element={<ToysAndFigures />}
            />
            <Route
              path="/tradingcars"
              element={<TradingCards />}
            />
            <Route
              path="/vintageclothes"
              element={<VintageClothes />}
            />
            <Route
              path="/vinylrecords"
              element={<VinylRecords />}
            />
            <Route 
            path="/mylisting"
            element={<MyListings/> }
            />
            
            {/* <Route 
            path="/cart"
            element={<Cart/> }
            /> */}
            {/* <Route
            path="createlisting"
            element={<CreateListing />}
            /> */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
