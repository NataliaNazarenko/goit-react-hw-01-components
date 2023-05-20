import userData from './user.json';

export const user = {
  username: userData.username,
  tag: userData.tag,
  location: userData.location,
  avatar: userData.avatar,
  stats: {
    followers: userData.stats.followers,
    views: userData.stats.views,
    likes: userData.stats.likes,
  },
};
