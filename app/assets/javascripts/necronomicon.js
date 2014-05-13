window.Necronomicon = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    a = Necronomicon.Collections.posts;
    a.fetch({
      success: function() {
        var view = new Necronomicon.Views.PostsIndex({ collection: a });
        $('#content').html(view.render().$el);
      }
    });


    //alert('Hello from Backbone!');
    // var a = new Necronomicon.Collections.Posts();
//     a.fetch();
    // var view = new Necronomicon.Views.PostsIndex();
    // view.render();
    // debugger
  }
};

$(document).ready(function(){
  Necronomicon.initialize();
});
