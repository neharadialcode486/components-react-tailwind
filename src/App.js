import './App.css';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function App() {
  const lenis = useLenis(({ scroll }) => {
    console.log("Scrolling is happening!", scroll);
  })
  return (
    <>
      <ReactLenis root>
        {/* Add your components here */}
        <div className='bg-black min-h-screen'></div>
        <div className='bg-slate-500 min-h-screen'></div>
        <div className='bg-red-500 min-h-screen'></div>
        <div className='bg-orange-500 min-h-screen'></div>
        <div className='bg-black min-h-screen'></div>
        <div className='bg-slate-500 min-h-screen'></div>
      </ReactLenis>
    </>
  );
}

export default App;
