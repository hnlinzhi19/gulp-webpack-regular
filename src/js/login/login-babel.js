
import tpl from './login.html';
import Regular from 'regularjs';

const LoginBabel = Regular.extend({

  name: 'login-babel',

  template: tpl,
  data: {
    title: 'ddwdd'
  }
})

export { LoginBabel }