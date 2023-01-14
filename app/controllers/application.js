import Controller from '@ember/controller';

export default Controller.extend({
  renderedFeatures: null,
  handleMapLoad(map) {
    this.set('renderedFeatures', map.queryRenderedFeatures());
  }
});
