angular.module('googleMaps', []).
    service('autoComplete',['$q', '$rootScope', function($q, $rootScope) {
        var geocoder = new google.maps.Geocoder();
        var service = new google.maps.places.AutocompleteService();
        this.getSuggestions = function(query, scope) {
            var deferred = $q.defer();

            service.getPlacePredictions({
                bounds: map.getBounds(),
                input: query,
                types: ['geocode'],
                componentRestrictions: {
                    country: 'au'
                }
            }, function(results, status){
                console.log(results)
                var descriptions =  $.map(results, function(result){
                    return result.description;
                })
                $rootScope.$apply(deferred.resolve(descriptions));
            })

            return deferred.promise;

        }
    }]);

