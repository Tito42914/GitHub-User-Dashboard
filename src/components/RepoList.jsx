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
  
  const sortedRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
  const visibleRepos = sortedRepos.slice(0, 10);
  
  return (
    <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">Repositories</h2>
      <p className='mt-2 text-sm text-slate-400'>
        Showing {visibleRepos.length} of {repos.length} repositories, sorted by stars.
      </p>

      <div className='mt-4 space-y-3'>
        {visibleRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  )
}

export default RepoList
