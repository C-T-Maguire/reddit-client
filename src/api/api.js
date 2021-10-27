const url = "https://www.reddit.com";

//Subreddit names for side menu
export const fetchSubredditNames = async () => {
  const endpoint = `${url}/subreddits.json`;
  const response = await fetch(endpoint);
  const json = response.json();
  return json;
}

//fetch hot posts
export const fetchHotPosts = async (subreddit) => {
  let endpoint;
  if(subreddit) {
    endpoint = `${url}/${subreddit}/hot.json`;
  } else {
    endpoint = `${url}/hot.json`;
  }
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data.children;
}

//fetch New posts
export const fetchNewPosts = async (subreddit) => {
  let endpoint;
  if(subreddit) {
    endpoint = `${url}/${subreddit}/new.json`;
  } else {
    endpoint = `${url}/new.json`;
  }
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data.children;  
}

//fetch top posts
export const fetchTopPosts = async (subreddit) => {
  let endpoint;
  if(subreddit) {
    endpoint = `${url}/${subreddit}/top.json`;
  } else {
    endpoint = `${url}/top.json`;
  }
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data.children;
}

//fetch search results
export const fetchSearchResults = async (searchTerm) => {
  const endpoint = `${url}/search.json?q=${searchTerm}`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data.children;  
}

//fetch subbreddit info (about bio)
export const fetchSubredditAbout = async (subreddit) => {
  const endpoint  = `${url}/${subreddit}.json`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data.children};

//fetch subreddit avatar

//fetch comments