function StatsPanel({ profile }) {
  if (!profile) {
    return (
      <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Stats</h2>
        <p className="mt-2 text-slate-400">Search for a user to see their stats.</p>
      </section>
    )
  }
  
  return (
    <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">Stats</h2>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div>
          <p className="text-2xl font-bold">{profile.followers}</p>
          <p className="text-sm text-slate-400">Followers</p>
        </div>

        <div>
          <p className="text-2xl font-bold">{profile.following}</p>
          <p className="text-sm text-slate-400">Following</p>
        </div>

        <div>
          <p className="text-2xl font-bold">{profile.public_repos}</p>
          <p className="text-sm text-slate-400">Repos</p>
        </div>
      </div>      
    </section>
  )
}

export default StatsPanel
