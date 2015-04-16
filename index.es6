'use strict';
(function () {
	if (!Map.prototype.toJSON) {
        let toJSON = function() {
            var o = Object.create(null);
            for(let [k, v] of this.entries()) {
                o[k] = v;
            }
            return o;
        }
     if (Object.defineProperty) {
			Object.defineProperty(Map.prototype, 'toJSON', {
				'value': toJSON,
				'configurable': true,
				'writable': true
			});
		} else {
			Map.prototype.toJSON = toJSON;
		}        
    }
}());
