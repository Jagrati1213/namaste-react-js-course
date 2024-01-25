import Body from './components/body/Body';
import Header from './components/header/Header';
import { FILM_CHICKS_BACKGROUND_IMG } from './utils/Constant';

function App() {

  return (
    <div className='app w-full bg-black min-h-[100vh]'>
      <Header />
      <div className='h-fit'>
        <img src={FILM_CHICKS_BACKGROUND_IMG} alt="background" className='absolute top-0 opacity-[0.4] h-full w-full object-cover' />
      </div>
      <Body />
      <div>Footer</div>
    </div>
  );
}

export default App;
