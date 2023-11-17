import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //load for 1 second
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  return (
    <>
      {loading && <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="loading-skeleton"></div>
      </div>}
      <div>
        <Spline
          style={{ width: '100vw', height: '100vh' }}
          scene="https://prod.spline.design/3k-MHhb3DXVBm22Z/scene.splinecode"
        />

      </div>
    </>
  )
}

export default App
