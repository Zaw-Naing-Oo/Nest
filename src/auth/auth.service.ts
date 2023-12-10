import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    login() {
        return { message: 'I am login' }
    }

    register() {
        return 'I am register'
    }
}