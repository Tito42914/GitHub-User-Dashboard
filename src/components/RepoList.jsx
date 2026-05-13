import RepoCard from './RepoCard'

function RepoList({ repos, loading }) {
  if (loading) {
    return (
      <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Repositories</h2>
        <p className="mt-2 text-slate-400">Loading repositories...</p>
      </section>
    )
  }

  if (repos.length === 0) {
    return (
      <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Repositories</h2>
        <p className="mt-2 text-slate-400">No repositories to display yet.</p>
      </section>
    )
  }
  
  return (
    <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">Repositories</h2>
        <div className='mt-4 space-y-3'>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
    </section>
  )
}

export default RepoList
