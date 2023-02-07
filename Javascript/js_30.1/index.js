const shelly = {
  login: "shellyalmo",
  id: 33236921,
  node_id: "MDQ6VXNlcjMzMjM2OTIx",
  avatar_url: "https://avatars.githubusercontent.com/u/33236921?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/shellyalmo",
  html_url: "https://github.com/shellyalmo",
  followers_url: "https://api.github.com/users/shellyalmo/followers",
  following_url:
    "https://api.github.com/users/shellyalmo/following{/other_user}",
  gists_url: "https://api.github.com/users/shellyalmo/gists{/gist_id}",
  starred_url: "https://api.github.com/users/shellyalmo/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/shellyalmo/subscriptions",
  organizations_url: "https://api.github.com/users/shellyalmo/orgs",
  repos_url: "https://api.github.com/users/shellyalmo/repos",
  events_url: "https://api.github.com/users/shellyalmo/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/shellyalmo/received_events",
  type: "User",
  site_admin: false,
  name: "Shelly Almoznino",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Frontend web developer",
  twitter_username: null,
  public_repos: 26,
  public_gists: 10,
  followers: 10,
  following: 6,
  created_at: "2017-10-30T21:48:44Z",
  updated_at: "2023-01-23T17:05:44Z",
};

document.querySelector("#submit-btn").addEventListener("click", getProfile);
async function getProfile() {
  try {
    const inputValue = document.querySelector("input").value;
    let response = await fetch(`https://api.githu.com/users/${inputValue}`);
    // let response = shelly;
    let data = await response.json();
    document
      .querySelector(".avatar-image")
      .setAttribute("src", `${data.avatar_url}`);
    document.querySelector(".user-name").innerText = data.login;
    document.querySelector(".num-repos").innerText = data.public_repos;
    document
      .querySelector("#github-link")
      .setAttribute("href", `https://github.com/${inputValue}`);
  } catch (error) {
    console.error(error);
  }
}
