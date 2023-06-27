import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import NewContainer from './Components/NewContainer';
import NewsListCard from './Components/NewsListCard';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <HeroSection />
        <NewContainer />
        <NewsListCard />
      </main>
    </div>
  );
}

export default App;
