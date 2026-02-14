import { NewsList } from './components/NewsList'

function App() {
  return (
    <main>
      <header className="site-header">
        <h1>Utskot.is</h1>
        <p>Fréttir og viðburðir</p>
      </header>
      <NewsList />
    </main>
  )
}

export default App
