const url = "https://www.reddit.com";

//Subreddit names for side menu
export const fetchSubredditNames = async () => {
  const endpoint = `${url}/subreddits.json`;
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  // console.log('fetching');

  return jsonResponse.data.children;
}

//fetch hot posts
export const fetchPostsHot = async (subreddit) => {
  let endpoint;
  if (subreddit) {
    endpoint = `${url}/r/${subreddit}/hot.json`;
  } else {
    endpoint = `${url}/hot.json`;
  }
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  // console.log('fetching');
  return jsonResponse.data.children;
};

//fetch New posts
export const fetchPostsNew = async (subreddit) => {
  let endpoint;
  if(subreddit) {
    endpoint = `${url}/r/${subreddit}/new.json`;
  } else {
    endpoint = `${url}/new.json`;
  }
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  // console.log('fetching');

  return jsonResponse.data.children;
}

//fetch top posts
export const fetchPostsTop = async (subreddit) => {
  let endpoint;
  if(subreddit) {
    endpoint = `${url}/r/${subreddit}/top.json`;
  } else {
    endpoint = `${url}/top.json`;
  }
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  // console.log('fetching');

  return jsonResponse.data.children;
}

//fetch search results
export const fetchSearchResults = async (searchTerm) => {
  const endpoint = `${url}/search.json?q=${searchTerm}`;
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  return jsonResponse.data.children;
}

//fetch subbreddit info (about bio)
export const fetchSubredditAbout = async (subreddit) => {
  const endpoint  = `${url}/r/${subreddit}/about.json`;
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  return jsonResponse.data;
}

//fetch user avatar
export const fetchUserAvatar = async (author) => {
  // https://www.reddit.com/user/<USERNAME>/about.json
  const endpoint = `${url}/user/${author}/about.json`;
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  return jsonResponse.data;
}

//fetch comments
export const fetchComments = async (permalink) => {
  const endpoint = `${url}/${permalink}/.json`;
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();

  return jsonResponse[1].data.children.map((comment) => comment.data);
};