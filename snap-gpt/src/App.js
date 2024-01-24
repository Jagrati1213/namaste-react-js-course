import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
import { SNAP_GPT_BACKGROUND_IMG } from './utils/Constant';

function App() {

  return (
    <div className='app w-full bg-gray-950 min-h-[100vh]'>
      <Header />
      <div className='h-fit'>
        <img src={SNAP_GPT_BACKGROUND_IMG} alt="background" className='absolute top-0 opacity-50 h-full w-full object-cover' />
      </div>
      <Body />
      <div>Footer</div>
    </div>
  );
}

export default App;
