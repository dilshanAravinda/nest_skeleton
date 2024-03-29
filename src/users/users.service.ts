import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users : {id: number, name: string, age: number} [] = [
        {id: 1, name : "dilshan", age : 27},
        {id: 2, name : "aravinda", age : 28},
        {id: 3, name : "kura", age : 28},
    ]

    createUser(user: {name: string, age: number}) : {}{
        return {
            id : this.users.length+1,
            name : user.name,
            age: user.age
        }
    }

   updateUser(id: number, updateData: {}): {}{

    const updateUserArray  = this.users.map(user => {
        if (user.id===id) {
            return {
                ...user,
                ...updateData
            }
        }
    })
    this.users = updateUserArray;

    return this.users;

   }

   getAllUsers(){
    return this.users;
   }

   getUser(id : number){
    return this.users.find(user => user.id === id);
   }

   delUser(id : number){
    return this.users.filter(user => user.id !== id)
   }
}
