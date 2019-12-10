(function () {
  angular
    .module('tribes')
    .controller('TribesListController', TribesListController);

  /* @ngInject */
  function TribesListController(Authentication, $rootScope, $scope) {

    // ViewModel
    const vm = this;

    // Exposed to the view
    vm.user = Authentication.user;
    vm.broadcastChange = function (data) {
      if (data.tribe) {
        $rootScope.$broadcast('tribeUpdated', data.tribe);
      }

      if (data.user) {
        Authentication.user = data.user;
        $rootScope.$broadcast('userUpdated');
      }
    };

    /**
     * Emit photo credits info
     * @TODO remove this
     */
    vm.addPhotoCredits = function addPhotoCredits(photo) {
      $scope.$emit('photoCreditsUpdated', photo);
    };
    vm.removePhotoCredits = function removePhotoCredits(photo) {
      $scope.$emit('photoCreditsRemoved', photo);
    };
  }
}());
