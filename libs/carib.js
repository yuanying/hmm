var carib = {};

carib.Movie = function(data) {
  var self = this;
  this.id = m.prop(data.id);
  this.thumbnail = m.prop(data.local_image);
  this.title = m.prop(data.title);
  this.url = m.prop(data.url);
  this.date = m.prop(data.date);
  this.actors = m.prop(data.actors);
  this.movie = m.prop(data.local_movie);
  this.display = m.prop("display: none;");
  this.show = function() {
    self.display("display: inline-block;")
  };
};

carib.vm = {
  init: function() {
    carib.vm.list = movies.map(function(movie, index) {
      return new carib.Movie(movie);
    });
  }
};

carib.controller = function() {
  carib.vm.init();
};

carib.moviePanelHeading = function(movie) {
  return m("div.panel-heading",
    // m("img.center-block",
    m("img.img-responsive.center-block",
      {
        src: movie.thumbnail(),
        onload: m.withAttr("style", movie.show)
      }
    )
  );
};

carib.moviePanelBody = function(movie) {
  return m("div.panel-body",
    [
      m("p.title", movie.title()),
      m("p",
        m("a.btn.btn-primary", { href: movie.movie }, "View")
      )
    ]
  );
};

carib.moviePanel = function(movie, index) {
  return m("div.movie",
    {
      style: movie.display()
    },
    m("div.panel.panel-default",
    [
      carib.moviePanelHeading(movie),
      carib.moviePanelBody(movie)
    ]
  ));
};

carib.view = function() {
  // console.log(carib.vm.list);
  return [
    carib.vm.list.map(carib.moviePanel)
  ];
};
