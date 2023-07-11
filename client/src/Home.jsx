import { heroApi, popularsales, toprateslaes, highlight} from './data/Data.js';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales} from './components';

function Home() {

  return (
    <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroApi={heroApi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
      </main>
      <Footer/>
    </>
  )
}

export default Home
