Package.describe({
  summary: "Simple upload avatar package for Meteor.",
  version: "1.3.0",
  name: "matthiaseckhart:avatar-upload",
  git: "https://github.com/MatthiasEckhart/avatar-upload.git"
});

var both = ['client', 'server'];
var client = ['client'];
var server = ['server'];

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2.0.2");

  api.use(['underscore', 'accounts-base', 'accounts-password'], both);
  api.use(['jquery', 'templating', 'twbs:bootstrap'], client);

  //add file
  api.addFiles([
    'src/helpers.js'
  ], both);

  api.addAssets([
    'src/vendor/imgareaselect/border-anim-h.gif',
    'src/vendor/imgareaselect/border-anim-v.gif',
  ], client);

  api.addFiles([
    'src/vendor/imgareaselect/imgareaselect-animated.css',
    'src/vendor/imgareaselect/jquery.imgareaselect.pack.js',
    'src/client.js',
    'src/template/editYourAvatarModal.html',
    'src/template/editYourAvatarModal.js',
    'src/template/editYourAvatarModal.css'
  ], client);

  api.add_files([
    'src/server.js',
  ], server);
});