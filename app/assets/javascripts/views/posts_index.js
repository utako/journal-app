Necronomicon.Views.PostsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "destroy", this.render);
    this.listenTo(this.collection, "change:title", this.render);
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },
  template: JST["posts/index"],

  render: function() {
    alert('rendering!')
    var renderedContent = this.template({
      posts: this.collection
    });
    this.$el.html(renderedContent);

    return this;
  },

  events: {
    "click button.delete": "delete"
  },

  delete: function(event) {
    var postID = $(event.target).data('id');
    var post = this.collection.get(postID);
    post.destroy();
  }
});