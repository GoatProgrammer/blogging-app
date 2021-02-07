import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'infernodia@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    role: 6
  }
]

export default users