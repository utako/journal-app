Necronomicon.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: Necronomicon.Models.Post
});

Necronomicon.Collections.posts = new Necronomicon.Collections.Posts();