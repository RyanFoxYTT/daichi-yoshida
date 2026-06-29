import '../App.css';
import AnimatedContent from '../components/ui/AnimatedContent'

function Voicebanks() {
  return (
    <> {}
    <AnimatedContent
        distance={800}
        direction="vertical"
        reverse={true}
        duration={0.7}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.5}
      >
      <h1>Voicebanks</h1>

      <h1>Newest</h1>
      
      <div className='singer-boxcard'>
        <img src={"/arts/boxcard.png"} alt="Daichi" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>吉田大地 AI - Latest Voicebank</h3>
            <p>Colors: Standard, Soft, Solid, Childish, Whisper</p>
            <p>Languages: 🇷🇺 🇬🇧 🇯🇵 🇨🇳 🇰🇷 🇰🇿 🇺🇦</p>
            <p>DiffSinger AI</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/diffs/russian.mp3"} type="audio/mpeg" />
            </audio>
			<audio controls>
              <source src={"/demos/diffs/english.mp3"} type="audio/mpeg" />
            </audio>
			<audio controls>
              <source src={"/demos/diffs/japanese.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/d_ai_v100/Daichi.AI.v100.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

      <div className='singer-boxcard'>
        <img src={"/arts/boxcard-maid.png"} alt="Daichi" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>吉田大地 CVVC MAID</h3>
            <p>Languages: 🇯🇵</p>
            <p>Pithes: Mono</p>
            <p>UTAU</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/maid/maid.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/maid/Daichi.CVVC.Maid.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

      <div className='singer-boxcard'>
        <img src={"/arts/boxcard.png"} alt="Daichi" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>吉田大地 VCV JPN</h3>
            <p>Colors: Standard, Solid (Early Acces/Not Fully Recorded)</p>
            <p>Languages: 🇯🇵</p>
            <p>Pithes: Mono</p>
            <p>UTAU</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/vcvjpn/normal.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/vcvjpn/Daichi.VCV.v2026.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

      <div className='singer-boxcard'>
        <img src={"/arts/boxcard.png"} alt="Daichi" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>吉田大地 CVVC Grape</h3>
            <p>Languages: 🇯🇵</p>
            <p>Pithes: Tripitch (F4, C4, G3)</p>
            <p>UTAU</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/grape/grape.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/grape/Daichi.CVVC.grape.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

      <div style={{ height: 'auto', background: 'transparent' }}></div>

      <h1>Older</h1>

      <div className='singer-boxcard'>
        <img src={"/arts/boxcard-old.png"} alt="Daichi" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>吉田大地 CVC Tripitch</h3>
            <p>Languages: 🇷🇺</p>
            <p>Pithes: Tripitch (A3, C4, D#4)</p>
            <p>UTAU</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/cvctri/sample.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/cvctri/daichi.cvc.rus.normal.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

      <div className='singer-boxcard'>
        <img src={"/arts/boxcard-old.png"} alt="Daichi" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>吉田大地 CVC Monopitch</h3>
            <p>Languages: 🇷🇺</p>
            <p>Pithes: Mono</p>
            <p>UTAU</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/cvcmono/bebe.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/cvcmono/daichi.cvc.rus.lol.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

      <div className='singer-boxcard'>
        <img src={"/arts/boxcard-old.png"} alt="not a GRAPEICHI" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>Daichi CVVC Multipitch</h3>
            <p>Languages: 🇯🇵</p>
            <p>Pithes: Multipitch</p>
            <p>UTAU</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/multi/f.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/multi/daichi.cvvc.multipitch.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

      <div className='singer-boxcard'>
        <img src={"/arts/boxcard-old.png"} alt="not a GRAPEICHI" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>Daichi CV Rentan</h3>
            <p>Languages: 🇯🇵</p>
            <p>Pithes: Mono</p>
            <p>UTAU</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/rentan/rrrr.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/rentan/daichi.rentan.cv.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

      <div className='singer-boxcard'>
        <img src={"/arts/boxcard-old.png"} alt="not a GRAPEICHI" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>Daichi CVVC Power</h3>
            <p>Languages: 🇯🇵</p>
            <p>Pithes: Mono</p>
            <p>UTAU</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/cvvcpower/zhopa.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/cvvcpwr/DAICHI.CVVC.POWER.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

      <div className='singer-boxcard'>
        <img src={"/arts/boxcard-old.png"} alt="not a GRAPEICHI" />
        <div className='singer-content'>
          <div className='singer-info'>
            <h3>Daichi VCV Old</h3>
            <p>Languages: 🇯🇵</p>
            <p>Pithes: Mono</p>
            <p>UTAU</p>
          </div>
          <div className='demo-players'>
            <audio controls>
              <source src={"/demos/vcvold/pressf.mp3"} type="audio/mpeg" />
            </audio>
          </div>
          <a href="https://github.com/RyanFoxYTT/daichi-yoshida/releases/download/vcvold/daichi.vcv.lol.zip" className='download-btn'>
            Download Voicebank
          </a>
        </div>
      </div>

    <div style={{ height: 'auto', background: 'transparent' }}></div>
    </AnimatedContent>
    </>
  );
}

export default Voicebanks;