import './App.css';
import './bootstrap.min.css'

import { Sidebar } from './Sidebar/Sidebar';
import { Navibar } from './Navbar/Navbar';
import { AboutMe } from './Screens/AboutMe/AboutMe';

function App() {
  return (
          <>
            <Sidebar></Sidebar>
            <Navibar></Navibar>
            <AboutMe></AboutMe>
          </>
  );
}

export default App;
