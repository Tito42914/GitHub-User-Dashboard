function SearchBar({ username, setUsername, handleSearch }) {
  return (
    <section className="rounded-lg border border-slate-800 bg-slate-900 p-4">
        <form className="flex gap-3" onSubmit={handleSearch}>
            <input
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              type="text"
              placeholder="Search GitHub username"
              className="flex-1 rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-white outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white"
            >
                Search
            </button>
        </form>
    </section>
  )
}

export default SearchBar
