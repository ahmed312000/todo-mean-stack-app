import { Component, OnInit } from "@angular/core";
import { TodoService } from "./todo.service";
import { Todo } from "./models/todo";
import { FormGroup , FormControl, Validators } from '@angular/forms'
import { Bg } from "./models/bg";

@Component({
    selector : 'app-todo',
    templateUrl : './todo.component.html',
    styleUrls : ['./todo.component.css']
})


export class TodoComponent  {
    BGs : Bg[] = [
        new Bg(), // 0
        new Bg(), // 1
        new Bg(),// 2
        new Bg(), //3
        new Bg(), //4
        new Bg(), // 5
        new Bg()  // 6
    ]

    // bgName = 'page5' ;
    ispage4 = true ;
    ispage5 = false ;
    ispage6 = false ;
    ispage7 = false ;
    ispage8 = false ;
    ispage9 = false ;
    ispage10 = false ;


    n = 0 ;
    counter = 4 ;




    


    f = new FormGroup({
        input : new FormControl('' , [Validators.required])
    })

    get input() {
        return this.f.get('input')
    }


    todos : Todo[] = [new Todo('Welcome To My App')]

    sorting() {
        if(this.todos) {
        this.todos.reverse();
        }
        else {}
    }


    constructor(private ts : TodoService) {}
    ngOnInit() {

        this.ts.getTodos().subscribe(data => {
            this.todos = data ;
        }, err => {console.log(err)})

        if(!localStorage.getItem('token')) {
            this.ts.createUser().subscribe(data =>{ 
                console.log(data)
                localStorage.setItem('token' , data.token)
                localStorage.setItem('id' , data.obj._id);
            }
                , err => console.log(err))
        }
    }
    onAdd(input) {
        // let todo = new Todo({
        //     content : input.value ,
        //     userId : this.userId
        // })

        let todo = {
            content : input.value ,
            userId : localStorage.getItem('id')
        }

        this.ts.createTodo(todo).subscribe(data => console.log(data) , err=>console.log(err))
        if(this.todos) {
        this.todos.splice(0 , 0 , todo)
        }

        // setTimeout(() => {
        //     this.ts.getTodos().subscribe(data => {
        //         this.todos = data ;
        //     }, err => {console.log(err)})
    
        // },200)

        this.ts.getTodos().subscribe(data => {
                 this.todos = data ;
             }, err => {console.log(err)})
    


        
        


        this.f.reset()
    }

    onDelete(id  , i) {
        // setTimeout(() => {
        //     this.ts.deleteTodo(id).subscribe(data => console.log(data) , err => console.log(err))

        // } , 600)

        this.todos.splice(i , 1)

        if(id) {
        this.ts.deleteTodo(id).subscribe(data => console.log(data) , err => console.log(err))
        }
        else {
            this.ts.getTodos().subscribe(data => {
                this.todos = data ;
           }, err => {console.log(err)})
        }
        // this.todos.splice(i , 1)
        

        // setTimeout(()=> {
        //     this.ts.getTodos().subscribe(data => {
        //         this.todos = data ;
        //     }, err => {console.log(err)})
            
        // },610)

        this.ts.getTodos().subscribe(data => {
                 this.todos = data ;
            }, err => {console.log(err)})


      

    }

    onToggled() {
        if(this.counter === 11 ) { // this.counter + this.BGs.length
            this.counter = 4 ;
        }

        if(this.n === 7 ) { // this.n + this.BGs.length
            this.n = 0 ; 
        }


        let arr = this.BGs.slice(this.n , this.n+1);
        // let name = arr[0].name ;
        this.ispage4 = false ;
        this.ispage5 = false ;
        this.ispage6 = false ;
        this.ispage7 = false ;
        this.ispage8 = false ;
        this.ispage9 = false ;
        this.ispage10 = false ;

        `${this['ispage' + this.counter] = true}` // generates this.ispage + counter
        this.counter ++ ;
        this.n ++ ;


    }

    onRefresh() {

        this.ts.getTodos().subscribe(data => {
            this.todos = data ;
       }, err => {console.log(err)})
    }


}