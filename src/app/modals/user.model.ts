interface User{
    id?: Number,
    username: String,
    fullname: String,
    phoneNumber?: String,
    gender: GenderType,
    avatar: String,
    email: String,
    roles: Set<String>,
    status: StatusType,
    dateOfBirth?: Date
}
export class UserAndToken {
  token: string
  user: User
}
