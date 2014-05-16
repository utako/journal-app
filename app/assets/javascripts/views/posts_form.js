Necronomicon.Views.PostsForm = Backbone.View.extend({
  template: JST["posts/form"],

  render: function() {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "submit form": "submit"
  },

  submit: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()["post"];
    if (this.model.isNew()) {
      var newPost = new Necronomicon.Models.Post(params);
      newPost.save({}, {
        success: function() {
          Necronomicon.Collections.posts.add(newPost);
          Backbone.history.navigate("", {trigger: true});
        }
      });
    } else {
      this.model.set(params);
    }
  },

});