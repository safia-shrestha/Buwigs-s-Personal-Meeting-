import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ProductCard from './component/ProductCard'
import './App.css'

// Sample product data – replace with your own or fetch from API
const topChoices = [
  {
    id: 1,
    title: 'Tekken 8',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1551103782-8ab5af9a1a2d?w=300&h=200&fit=crop',
    rating: 4.8
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=200&fit=crop',
    rating: 4.9
  },
  {
    id: 3,
    title: 'Star Wars Outlaws',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1603722403907-4a4d9a5a876b?w=300&h=200&fit=crop',
    rating: 4.7
  },
  {
    id: 4,
    title: 'Black Myth: Wukong',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1b8d?w=300&h=200&fit=crop',
    rating: 5.0
  }
]

const games = [
  {
    id: 5,
    title: 'Call of Duty: Modern Warfare III',
    price: 14000,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop',
    rating: 4.6
  },
  {
    id: 6,
    title: 'FIFA 24',
    price: 11000,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=300&h=200&fit=crop',
    rating: 4.5
  },
  {
    id: 7,
    title: 'Elden Ring: Shadow of the Erdtree',
    price: 17000,
    image: 'https://images.unsplash.com/photo-1627856013091-8e506e589a64?w=300&h=200&fit=crop',
    rating: 4.9
  },
  {
    id: 8,
    title: 'Horizon Forbidden West',
    price: 16000,
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1b8d?w=300&h=200&fit=crop',
    rating: 4.8
  }
]

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>All your favorite games, one place.</h1>
            <p>Get the best deals on new and pre‑owned games. Fast delivery.</p>
            <button className="cta-button">Shop Now →</button>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1535228397981-82b4d0649c7c?w=500&h=300&fit=crop" alt="Hero" />
          </div>
        </section>

        {/* Top Choices Section */}
        <section className="section">
          <h2 className="section-title">⭐ Top choices</h2>
          <div className="products-grid">
            {topChoices.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section className="section">
          <h2 className="section-title">🎮 Games</h2>
          <div className="products-grid">
            {games.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App