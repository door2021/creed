const { faker } = require('@faker-js/faker');

export const createUser = () => {
    const user = {
        userId: faker.datatype.uuid(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
    }

    return user
}

export const findUser = (users,id) => {
    const msg = {}

    users.forEach((u) => {
        if (u.userId === id) {
            msg.user = u
        }
    })

    return msg;
}

export const updateUser = (users, id, data) => {
    const msg = {}
    
    users.forEach((u) => {
        if (u.userId === id) {
            var i = users.indexOf(u)
            users.splice(i, 1)
            users[i] = data
            msg.status = 'success'
            msg.users = fetchUsers()
        }
    })

    return msg;
}