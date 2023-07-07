import './App.css';
import './reset.css';
import Content1 from './Compornent/Content1';
import Header from './Compornent/Header';
import Content2 from './Compornent/Content2';
import Content3 from './Compornent/Content3';
import Content4 from './Compornent/Content4';
import { useState, useEffect } from 'react';
import Roof from './Compornent/Roof';
// import Footer from './Compornent/Footer';


function App() {
   const [mouseEvent, setMouseEvent] = useState({ x: 0, y: 0});
   const [scale, setScale] = useState(false);
   const [isOn, setIsOn] = useState(false);
   const [spin, setSpin] = useState(false);
   const [reset, setReset] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setIsOn(true);
      }, 1000);
      setTimeout(() => {
         setSpin(true);
      }, 2000);
      setTimeout(() => {
         setScale(1);
         setReset(true)
      }, 3000);
   }, []);

   const mouseMove = (event) => {
      const { pageX: x, pageY: y } = event;
      setMouseEvent({ x, y })
   }

   const cursorStyle = {
      left: mouseEvent.x,
      top: mouseEvent.y,
   };

   return (
      <>
         <div className={`App ${isOn && 'on'} ${spin && 'spin'} ${scale && 'sca'} ${reset && 'reset'}`} onMouseMove={mouseMove} >
            <Header />
            <div className='container'>
               <Content1 />
               <Content2 />
               <Content3 />
               <Content4 />
               <Roof />
            </div>
            <div className='cursor' style={cursorStyle}></div>
         </div>
      </>
   );
}

export default App;
