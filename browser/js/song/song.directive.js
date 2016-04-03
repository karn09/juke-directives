juke.directive('songsList', ['PlayerFactory', function(PlayerFactory) {
  return {
    restrict: 'E',
    scope: {
      songs: '='
    },
    templateUrl: '/js/song/templates/song-list.html',
    link: function(scope, element, attribute) {
      scope.getCurrentSong = function() {
        return PlayerFactory.getCurrentSong();
      };

      scope.isPlaying = function(song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };

      scope.toggle = function(song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.songs);
        } else if (PlayerFactory.isPlaying()) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };
    }
  };
}]);
