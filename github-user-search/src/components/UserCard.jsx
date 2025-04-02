const UserCard = ({ user }) => {
  return (
    <div className="p-4 border rounded shadow-md text-center">
      <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-bold mt-2">{user.name || user.login}</h2>
      <p className="text-gray-600">@{user.login}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
