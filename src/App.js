import React, { useState } from 'react'

import { Navbar } from './Components/Navbar';
import { Routese } from './Components/Routese';
import { Footer } from './Components/Footer';

const App = () => {
    const [darkTheme,setDarkTheme] = useState(false);
  return (
    <div className={darkTheme? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 black dark:min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Routese />
          <Footer />
      </div>
    </div>
  );
}

export default App;