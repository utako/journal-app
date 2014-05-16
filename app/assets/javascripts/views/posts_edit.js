Necronomicon.Views.PostsEdit = Backbone.View.extend({
  template: JST["posts/edit"],

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
    var that = this;
    this.model.set(params);
    this.model.save({}, {
      success: function() {
        Backbone.history.navigate("", {trigger: true});
      }
    });
  },

});