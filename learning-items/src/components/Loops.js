function Loops({ users }) {
    return (
        <ul>
            {
                // users.map((user, i) => <li key={i}>{user.name} ({user.username}) - Company : {user.company}</li>)
                users.map((user, i) => <li key={user.id}>{user.name} ({user.username}) - Company : {user.company}</li>)
            }
        </ul>
    );
}

export default Loops;