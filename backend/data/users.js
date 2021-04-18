import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'aayush@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jack Lean',
        email: 'jack@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Alizeh Shah',
        email: 'ali@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users