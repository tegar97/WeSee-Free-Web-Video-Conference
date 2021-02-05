const users = [];
const addUser = ({id , name,room}) => {
    name = name.trim().toLowerCase();

    const existingUsers = users.find(user => user.room  & users.name ===name)
    if(existingUsers) {
        return {error : 'Username is taken'}
    }


    const user = {id,name,room}

    users.push(user);
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if(index !== -1) {
        return users.splice(index,1)[0]
    }


}

const getUser = (id) => users.find(user => user.id === id);

const getUsersinRoom = (room) => users.filter(user => user.room === room);

module.exports =  {addUser, removeUser,getUser,getUsersinRoom}