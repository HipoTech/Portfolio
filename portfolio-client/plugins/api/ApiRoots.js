const main = 'http://localhost:3100';

export default {

  // User
  user: `${main}/api/user`,
  userRegister: `${main}/api/user/register`,
  userLogIn: `${main}/api/user/login`,
  userLogOut: `${main}/api/user/logout`,
  userAuthenticate: `${main}/api/user/auth`,

  //Product
  productCreate: `${main}/api/products/create`,
  productGetAll: `${main}/api/products/getAll`,
  productGetOne: `${main}/api/products/getOne`,
  productEditOne: `${main}/api/products/edit`,
  productDeleteOne: `${main}/api/products/delete`,

  //Category
  categoryCreate: `${main}/api/categories/create`,
  categoryGetAll: `${main}/api/categories/getAll`,
  categoryGetOne: `${main}/api/categories/getOne`,
  categoryEditOne: `${main}/api/categories/edit`,
  categoryDeleteOne: `${main}/api/categories/delete`,

  //Brand
  brandCreate: `${main}/api/brands/create`,
  brandGetAll: `${main}/api/brands/getAll`,
  brandGetOne: `${main}/api/brands/getOne`,
  brandEditOne: `${main}/api/brands/edit`,
  brandDeleteOne: `${main}/api/brands/delete`,
} 
