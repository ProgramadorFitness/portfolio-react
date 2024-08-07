
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import AnimatedText from '../components/AnimatedText';
import MyImg from '../assets/MyImg.png';
const Home = () => {
  const navigate = useNavigate();

  const goto = () => {
    navigate('/projects')
  }
  return (
<div className='lg:h-screen md:h-screen h-auto pt-20 flex flex-col items-center justify-center  p-4 '>
      <div className='relative w-full max-w-screen-lg flex flex-col md:flex-row items-center'>
        
        <div className='relative w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0'>
          <div className='relative w-52 h-80'>
            <img src={MyImg} alt="Profile" className='absolute inset-0 w-full h-full shadow-3xl rounded-full object-cover lg:hover:scale-75' />
          </div>
        </div>
        
        <div className='relative z-10 flex-1 max-w-lg sm:mt-11 md:mb-0 md:pr-8  lg:hover:scale-75'>
          <div className='absolute inset-0 rounded-3xl border-slate-600 shadow-2xl bg-gray-700'></div>
          <div className='relative z-10 text-slate-300 bg-opacity-85 shadow-3xl rounded-3xl bg-transparent p-4'>
            <div className='flex items-center space-x-4'>
              <h1 className='text-2xl text-slate-950'>Welcome to my Portfolio</h1>
              <button onClick={goto}>
                <FontAwesomeIcon icon={faFolderOpen} size="2xl" style={{ color: "#d1d7e0" }} />
              </button>
            </div>
            <h2 className='text-5xl'>Hey What's Up¡!, What's Going on</h2>
            <h2 className='text-2xl text-slate-950 mb-4'>About</h2>
            <AnimatedText
              text="I'm Daniel Torres, though some people call me EltorpeEse, Junior, or even ProgramadorFitness.
                I'm passionate about learning new technologies and perfecting the skills I already have.
                In my free time, I enjoy cooking and working out, and it's not uncommon to see me combining these interests in unexpected ways.
                Explore my work and see how my unique personality and enthusiasm for technology can make a difference in your projects."
              speed={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;