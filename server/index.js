users = require('./db_users.json');

roles = require('./db_roles.json');

groups = require('./db_groups.json');



module.exports = function() {

  return {

    users: users.users,

    roles: roles.roles,

    groups: groups.groups

  }

}
