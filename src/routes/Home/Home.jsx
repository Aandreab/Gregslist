import './Home.css'
import { Card} from "react-bootstrap";
export default function Home() {
  return (
    <main className='home-container'>
      <h1>Home</h1>
      <Card className='home-intro'>
      <h3>It’s time to turn stuff into living</h3>
      <p>Because honestly, the stuff we have isn’t always the right stuff. The stuff we need to live the life we want. But your old bookshelf? That’s someone else’s new bookshelf. Someone else’s record collection is your new dinner party playlist. And your vintage, signed LeBron jersey is…well, someone else’s vintage, signed LeBron jersey.</p>
      <p>We created Gregslist to help make secondhanding second nature by making it quicker, simpler, and more fun - and with over 100 million downloads and hundreds of millions of listings, it's clear that Gregslist makes it simple to buy and sell locally. Because listing what you don’t need with the snap of a photo and finding what you want right in your own neighborhood doesn’t just help you buy and sell more - it helps you live more. (Plus, it’s free. Free is good.)</p>
      <p>So what are you waiting for? It’s time for less stuff and more living.
      </p>
      </Card>
    </main>
  );
}

