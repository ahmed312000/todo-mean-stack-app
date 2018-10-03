import { Injectable } from "@angular/core";
import { Todo } from "./models/todo";
import { Http } from '@angular/http'
import { User } from "./models/user";
import { Headers } from '@angular/http'
import { map } from 'rxjs/operators'
import * as jwt_decode from 'jwt-decode' ;

@Injectable()

export class TodoService {


    constructor(private http : Http) {}
    private url = ''
    // private url = 'http://localhost:3000'
    private headers = new Headers({ 'Content-Type' : 'application/json' })

    // getDecodedAccessToken(): any {
    //     if(localStorage.getItem('token')) {
    //         return jwt_decode(localStorage.getItem('token') );
    //     }
    //     else {}
    //   }

    todos = [
        new Todo('finish home work'),                                
        new Todo('feed the dog'),
        new Todo('feed the cat'),
        new Todo('make dinner')
    ]

    getTodos() {
        return this.http.get(this.url + '/todo' + '/get-all' + '/' + localStorage.getItem('id') , { headers : this.headers }).pipe(map(res => {
            let todos = res.json().obj
            let transformedArray : Todo[] = []

            for(let todo of todos) {
                transformedArray.splice(0 , 0 , new Todo(todo.content , localStorage.getItem('id') , todo._id ))
            }
            return  transformedArray
        })
    )
    }

    createUser() {
        let user = new User()
        let body = JSON.stringify(user) 
        return this.http.post(this.url + '/user' , body , {headers : this.headers}).pipe(map(res => res.json()))
    }

    createTodo(todo) {
        let body = JSON.stringify(todo)
        return this.http.post(this.url + '/todo' , body ,{headers : this.headers}).pipe(map(res => res.json()))
    }

    deleteTodo(id) {
        return this.http.delete(this.url + '/todo/' + id).pipe(map(res=> res.json()))
    }

    }

