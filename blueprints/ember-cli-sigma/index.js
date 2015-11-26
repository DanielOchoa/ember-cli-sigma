
module.exports = {
  description: 'Adds sigma.js to project from bower.',

  normalizeEntityName: function() {/* generator with no args */},

  afterInstall: function(/* options */) {
    return this.addBowerPackageToProject('sigma', '1.0.3');
  }
};
