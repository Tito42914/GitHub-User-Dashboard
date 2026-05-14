function RepoCard({ repo }) {
  return (
    <article className="rounded-md border border-slate-800 bg-slate-950 p-4">
      <h3 className="break-words font-semibold">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          {repo.name}
        </a>
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {repo.description || 'No description available.'}
      </p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
        <span>{repo.language || 'Unknown'}</span>
        <span>{repo.stargazers_count} stars</span>
        <span>{repo.forks_count} forks</span>
      </div>
    </article>
  )
}

export default RepoCard
