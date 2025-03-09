import users from '../../data/users.json'; 

export default function handler(req, res) {
  const { query } = req.query;

  if (query) {
    const filteredUsers = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase()) ||
        user.city.toLowerCase().includes(query.toLowerCase())
    );
    res.status(200).json(filteredUsers);
  } else {
    res.status(200).json(users);
  }
}