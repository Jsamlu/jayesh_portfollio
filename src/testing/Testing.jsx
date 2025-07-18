import React, { useEffect, useState } from "react";

const Testing = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Jsamlu/repos")
      .then(res => res.json())
      .then(data => {
        // Optional: filter or sort repos
        const filtered = data.filter(repo => !repo.fork); // ignore forks
        setRepos(filtered);
      })
      .catch(err => console.error("Failed to fetch repos:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">My GitHub Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map(repo => (
          <div key={repo.id} className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            <p className="text-gray-600 text-sm">{repo.description || "No description"}</p>
            <div className="text-sm mt-2">
              <span className="inline-block mr-2">⭐ {repo.stargazers_count}</span>
              <span className="inline-block mr-2">🍴 {repo.forks_count}</span>
              <span className="inline-block">💻 {repo.language}</span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testing;
