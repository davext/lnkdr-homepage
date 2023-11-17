import Spline from '@splinetool/react-spline';
import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true)
  const [showReset, setShowReset] = useState(false)

  const spline = useRef();

  function onLoad(splineApp) {
    spline.current = splineApp;
  }

  useEffect(() => {
    //load for 1 second
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  useEffect(() => {
    //on mouse up show reset button
    window.addEventListener('mouseup', () => {
      setShowReset(true)
    })
  }, [])

  return (
    <>
      {loading && <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="loading-skeleton"></div>
      </div>}
      <div>
        {showReset && <button type="button"
          className='fadein'
          style={{
            position: 'fixed',
            top: '10px',
            left: '10px',
            zIndex: 2,
          }}
          onClick={() => {
            window.location.reload()
          }}>
          Reset
        </button>}
        <Spline
          onLoad={onLoad}
          style={{ width: '100vw', height: '100vh' }}
          scene="https://prod.spline.design/3k-MHhb3DXVBm22Z/scene.splinecode"
        />
      </div>
    </>
  )
}

export default App
