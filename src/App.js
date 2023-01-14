import React, { useEffect } from 'react'
import {Route, Routes} from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import {CreateContainer, Header,MainContainer, Footer } from './components';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
     
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems : data,
      })
    })
  }
  useEffect(() =>{
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-gray-200">
      <Header />

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>

      <Footer />
    </div>
    </AnimatePresence>
  );
};

export default App;