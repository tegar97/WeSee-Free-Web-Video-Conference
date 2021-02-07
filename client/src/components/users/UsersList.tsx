import { UserContainer, UserProfile } from './userList.styles.styles';

function Users({ user }) {
    return (
        <UserContainer>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <UserProfile>
                    <span>{user.name.substring(0, 1)}</span>
                </UserProfile>
                <span className="ml-3 text-lg text-white capitalize">{user.name}</span>
            </div>
        </UserContainer>
    );
}

export default Users;
