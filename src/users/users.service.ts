import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "what the heck",
            "email": "admin@gmail.com",
            "role": "Admin"
        },
        {
            "id": 2,
            "name": "what the feck",
            "email": "normal@gmail.com",
            "role": "User"
        },
    ]

    findAll(role?: 'Admin' | 'User') {
        if(role) {
           const users = this.users.filter(user => user.role === role);
           if(users.length === 0) throw new NotFoundException(`Users with role ${role} not found`);
           return users;
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id );
        if(!user) throw new NotFoundException(`User with ID ${id} not found`);
        return user;
    }

    create(user: CreateUserDto) {
        const userHighestId = [...this.users].sort((a,b) => b.id - a.id);
        const newUser = {
            id: userHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser);
        return newUser
    }

    update(id: number, updatedUser: UpdateUserDto) {
        this.users = this.users.map(user => {
            if(user.id === id) {
                return { ...user, ...updatedUser}
            }
            return user;
        })

        return this.findOne(id);
    }

    remove(id: number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
