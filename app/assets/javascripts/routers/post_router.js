Necronomicon.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postsShow",
  },

  postsShow: function() {
    var post = Necronomicon.Collections.posts.getOrFetch(id);
    var showView = new Necronomicon.Views.PostsShow({
      model: post
    })
    this._swapView(showView);
  },

  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $("body").html(view.render().$el);
  }
});