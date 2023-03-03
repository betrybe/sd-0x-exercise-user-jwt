const users = [{ name: 'name', email: 'pass@email.com', password: 'trybe', role: 'admin' }];

function omitPassword(user) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

function create({ name, email, password, role }) {
  users.push({ name, email, password, role });
  return {
    ...omitPassword({ name, email, password, role }),
  };
}

module.exports = {
  create,
};
