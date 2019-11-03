import React from 'react';

import Home from "./Home";
import AuthContextProvider from "./Context";

function App() {
  return (
      <AuthContextProvider>
<Home/>
      </AuthContextProvider>
  );
}

export default App;
