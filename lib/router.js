FlowRouter.route('/', {
  name: 'root',

  action: function(params, queryParams) {
    console.log('Showing home page');
    FlowLayout.render('appLayout', { main: 'feed' });
  }
});
