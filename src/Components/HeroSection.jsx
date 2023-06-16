import web3Mobile from '../assets copy/images/web3_mobile.jpg';

export default function HeroSection() {
  return (
    <div>
      <img src={web3Mobile} />
      <h1>The Bright Future of Web 3.0?</h1>
      <p>
        We dive into the next evolution of the web that claims to put the power of the platforms
        back into the hands of the people. But is it really fulfilling its promise?
      </p>
      <button>Read More</button>
    </div>
  );
}
