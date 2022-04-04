async function fetchUsers () {
  const userIDs = await fetch('/users');

  const users = await Promise.all(
    userIDs.map(userID => fetch(`/users/${userID}`))
  );

  return users;
} 
