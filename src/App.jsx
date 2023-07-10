import { heroApi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/Data.js';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';

function App() {

  return (
    <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroApi={heroApi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
