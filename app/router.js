import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('homepage');
  this.route('login');
  this.route('gov-reg');

  this.route('firstproperty');
  this.route('home');
  this.route('usrgovt');
  this.route('newowner');
  this.route('cut');
  this.route('land-no');
  this.route('temp');
});

export default Router;
