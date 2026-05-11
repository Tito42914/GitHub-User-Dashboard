import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard'
import StatsPanel from './components/StatsPanel'
import RepoList from './components/RepoList'

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  async function handleSearch(event) {
    event.preventDefault();
    
    setError('');

    if (!username) {
      setError('Please enter a GitHub username');
      return;
    }

    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      setProfile(null);
      setError('User not found');
      return;
    }
    
    const data = await response.json();

    setProfile(data);
  }
  
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <div className='mx-auto max-w-5xl px-6 py-10'>
        <header className='mb-8'>
          <h1 className='text-3xl font-bold'>GitHub User Dashboard</h1>
          <p className='mt-2 text-slate-400'>
            Search for a GitHub user and view their profile and repositories.
          </p>
        </header>

        <SearchBar 
          username={username} 
          setUsername={setUsername} 
          handleSearch={handleSearch}  
        />

        {error && <p className='mt-4 text-red-400'>{error}</p>}
        {profile && <p className='mt-4 text-slate-400'>Found: {profile.login}</p>}

        <section className='mt-8 grid gap-6 lg:grid-cols-[1fr_2fr]'>
          <div className='space-y-6'>
            <ProfileCard />
            <StatsPanel />
          </div>
        
          <RepoList />
        </section>
      </div>
    </main>
  )
}

export default App
