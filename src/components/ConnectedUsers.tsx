interface ConnectedUsersProps {
  users: string[];
}

export default function ConnectedUsers({ users }: ConnectedUsersProps) {
  return (
    <div className='connected-users'>
      <h2>Участники: {users.length}</h2>
      <div className='users-list'>
        {users.map((user, index) => (
          <div key={index} className='user'>
            <span className='user-avatar'>{user[0].toUpperCase()}</span>
            {user}
          </div>
        ))}
      </div>
    </div>
  );
}
