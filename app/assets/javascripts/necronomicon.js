window.Necronomicon = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Necronomicon.Routers.PostRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Necronomicon.initialize();
});
