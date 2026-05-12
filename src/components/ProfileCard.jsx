function ProfileCard({ profile }) {
  if (!profile) {
    return (
      <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Profile</h2>
        <p className="mt-2 text-slate-400">Search for a user to see their profile.</p>
      </section>
    )
  }
  
  return (
    <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
      <img
        src={profile.avatar_url}
        alt={`${profile.login} avatar`}
        className="h-24 w-24 rounded-full border border-slate-700"
      />
      
      <h2 className="mt-4 text-xl font-semibold">
        {profile.name || profile.login}
      </h2>

      <p className="text-slate-400">@{profile.login}</p>

      <p className="mt-4 text-slate-300">
        {profile.bio || 'No bio available.'}
      </p>

      <a
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-blue-400 hover:text-blue-300"
      >
        View GitHub Profile
      </a>
    </section>
  )
}

export default ProfileCard
