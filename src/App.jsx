import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Favorite, Orders, Shop, ShopItem, Error } from './pages';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/shop/:item" element={<ShopItem />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}

export default App;
