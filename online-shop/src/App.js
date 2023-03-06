import React from 'react';
import UserProvider from './context/User/UserProvider';
import RouterPaths from './routes/Router';



function App() {

  return (
    <div className="App">
      <>
      <UserProvider>
      
      <RouterPaths />
      
      </UserProvider>
      </>
    </div>
  );
}

export default App;
