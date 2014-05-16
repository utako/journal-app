Necronomicon.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function() {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }

});