module.exports = app => {
    const { router, controller } = app;
    router.get('/home', controller.home.index);
    router.get('/cube', controller.home.index);
    router.get('/', controller.home.index);
  };
