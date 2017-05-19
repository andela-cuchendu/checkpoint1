import expect from 'expect';
import User from '../../src/model/User';

const loginDetails = { name: 'Chibu Jax', email: 'chibujax@gmial.com', imageUrl: 'jaximg.png', favorites: {} };

describe('User Model', () => {

  it('should log user in when values is supplied and store it', () => {
    User.Login(loginDetails);
    expect(User.isLoggedin).toBe(true);
  });

  it('should return Chibu Jax as the name of the logged in user', () => {
    expect(User.name).toEqual('Chibu Jax');
  });

  it('should return chibujax@gmial.com as the logged in user', () => {
    expect(User.email).toEqual('chibujax@gmial.com');
  });

  it('should return jaximg.png.jpg as logged in', () => {
    expect(User.imageUrl).toEqual('jaximg.png');
  });

  it('should Remove all user details on logout', () => {
    User.logOut();
    expect(User.isLoggedin).toBe(false);
  });
  it('should be undefined for user name', () => {
    expect(User.name).toBe(undefined);
  });

  it('should be undefined for user email', () => {
    expect(User.email).toBe(undefined);
  });

  it('should be undefined for user imageUrl', () => {
    expect(User.imageUrl).toBe(undefined);
  });

});
