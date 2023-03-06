import React from 'react';
import UserProvider from './context/User/UserProvider';
import CartProvider from './context/Cart/CartProvider';
import RouterPaths from './routes/Router';



function App() {

  return (
    <div className="App">
      <>
      <CartProvider>
      <UserProvider>
      
      <RouterPaths />
      
      </UserProvider>
      </CartProvider>
      </>
    </div>
  );
}

export default App;
