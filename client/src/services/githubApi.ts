
 export async function fetchGitHubRepos() {
    const response = await fetch(
        "https://api.github.com/users/jas-michele/repos"
    );

    const data = await response.json();

    return data;
}
