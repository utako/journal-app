Necronomicon.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/form": "postsForm",
    "posts/edit": "postsEdit",
    "posts/:id": "postsShow"
  },

  postsIndex: function(){
    var view = new Necronomicon.Views.PostsIndex({
      collection: Necronomicon.Collections.posts
    });
    Necronomicon.Collections.posts.fetch();
    this._swapView(view);
  },

  postsShow: function(id) {
    var post = Necronomicon.Collections.posts.getOrFetch(id);
    var showView = new Necronomicon.Views.PostsShow({
      model: post
    })
    this._swapView(showView);
  },

  postsForm: function(id) {
    var post = new Necronomicon.Models.Post();
    if (id) {
      post = Necronomicon.Collections.posts.getOrFetch(id);
    }
    var formView = new Necronomicon.Views.PostsForm({
      model: post
    });
    this._swapView(formView);
  },

  postsEdit: function() {
    var id = this.currentView.model.id;
    var post = Necronomicon.Collections.posts.getOrFetch(id);
    var editView = new Necronomicon.Views.PostsEdit({
      model: post
    });
    this._swapView(editView);
  },

  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $("#content").html(view.render().$el);
  }
});