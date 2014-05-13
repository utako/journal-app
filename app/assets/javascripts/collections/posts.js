Necronomicon.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: Necronomicon.Models.Post,

  getOrFetch: function (id) {
    var model;
    var posts = this;

    if (model = this.get(id)) {
      model.fetch();
      return model;
    } else {
      model = new Necronomicon.Models.Post({ id: id });
      model.fetch({
        success: function () { posts.add(model) }
      });
      return model;
    }
  }
});

Necronomicon.Collections.posts = new Necronomicon.Collections.Posts();