juke.directive('player', function() {
  return {
    restrict: 'E',
    controller: 'PlayerCtrl',
    templateUrl: '/js/player/templates/player.html'
  };
});

juke.directive('updateTime', function() {
  return {
    restrict: 'A',
    scope: {
    },
    link: function(scope, element, attr) {
      var clicked = false;
      element.on('mousedown', function() {
        clicked = true;
      });
      element.on('mousemove', function() {
        if (clicked) {
          var clickX = event.clientX - element[0].offsetLeft;
          var barWidth = element[0].clientWidth;
          var position = clickX / barWidth;
          var root = scope.$root;
          root.setProgress(position);
        }
      });
      element.on('mouseup', function(event) {
        clicked = false;
      });
    }
  };
});
