import '../App.css'
import AnimatedContent from '../components/ui/AnimatedContent'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
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

        <h1>
        Daichi Yoshida
        </h1>

        <h2 className='about'>
          Daichi Yoshida - Male Voice Library for UTAU/OpenUtau <br></br> A youthful male voice with a surprisingly realistic and versatile tone, capable of both gentle softness and powerful intensity.
        </h2>

		<div className='vbuttt'>
		<Link to="/voicebanks">
			<button className='vbbutt'>
				Voicebanks
			</button>
		</Link>
		</div>

      </AnimatedContent>
    </>
  )
}

export default Home
