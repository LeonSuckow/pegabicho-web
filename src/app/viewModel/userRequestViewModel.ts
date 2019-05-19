export class UserRequestViewModel{
    Type: UserType;
    Email: string;
    Password: string;
}

enum UserType{
    Customer = 1,
    Provider = 2,
    Enterprise = 3,
    Administrative = 4,
    Root = 99,
}