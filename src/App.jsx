import { Header } from './components/Header'
import { Home } from './views/Home'

function App () {
  return (
    <div>
      <main className='bg-white dark:bg-gray-800 pb-0 sm:pb-6 bg-opacity-25'>
        <Header />
        <Home />
      </main>
    </div>
  )
}

export default App
