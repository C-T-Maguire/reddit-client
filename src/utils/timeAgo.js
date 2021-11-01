
// passing in "created_utc(pin):1635338890" (just the number)

export function timeAgo(timeUTC) {
  const nowTime = Math.floor(new Date().getTime()/1000.0);
  const timeAgoSeconds = nowTime - timeUTC;
  let message;

  //posted less than a min ago
  if (timeAgoSeconds < 60) {
    message = `Just now`;
    return message;
  }
  
  //posted less than a hour ago (< 3600 seconds)
  if (timeAgoSeconds >= 60 && timeAgoSeconds < 3600) {
    const minsAgo = Math.floor(timeAgoSeconds/60);
    message = `${minsAgo}m ago`;
    return message;
  }  
  //posted 1hr = 23hours ago (between 3600 and 86400) (when reaches 86400 its 1 day)
  if (timeAgoSeconds >= 3600 && timeAgoSeconds < 86400) {
    const hoursAgo = Math.floor(timeAgoSeconds/3600);
    message = `${hoursAgo}h ago`;
    return message;
  }
  //posted prev day
  if (timeAgoSeconds >= 86400 && timeAgoSeconds < 172800) {
    message = 'Yesterday';
    return message;
  }
  //posted more than 2 days ago (172800 seconds) 
  if (timeAgoSeconds >= 172800) {
    message = 'A few days ago';
    return message;
  }
}