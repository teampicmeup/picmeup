const User = require('./user');
const Video = require('./video');
const Tag = require('./tag');
const Playlist = require('./playlist');


// Form the associations

Playlist.hasMany(Video);
Video.hasMany(Tag);

Video.belongsToMany(Playlist, {through: 'playlistVideos'});
Tag.belongsToMany(Video, {through: 'videoTags'});


// exported just in case, but can also be fetched via db.model('Video') etc.

module.exports = { User, Video, Tag, Playlist }
