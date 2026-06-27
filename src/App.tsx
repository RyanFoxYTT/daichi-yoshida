import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClickSpark from './components/ui/ClickSpark';
import FloatingLines from './components/ui/FloatingLines';
import Home from './pages/Home';
import Voicebanks from './pages/Voicebanks';

function App() {
  return (
    <BrowserRouter>
    <div style={{ position: 'relative', minHeight: '100vh' }}> 
      <ClickSpark
        sparkColor="#f9ceff"
        sparkSize={10}
        sparkRadius={30}
        sparkCount={6}
        duration={300}
      >
          <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
            <FloatingLines 
              enabledWaves={["top","middle","bottom"]}
              lineCount={8}
              lineDistance={8}
              bendRadius={8}
              bendStrength={-2}
              interactive
              parallax={true}
              animationSpeed={1}
              linesGradient={["#8b28c4", "#461d88", "#5321a3"]}
            />
          </div>
          
          <header style={{ position: 'relative', zIndex: 1 }}>
            <a href="/">Home </a>
            <a href="/voicebanks">Voicebanks </a>
          </header>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/voicebanks" element={<Voicebanks />} />
            </Routes>
          </div>
      </ClickSpark>
      </div>
    </BrowserRouter>
  );
}

export default App;