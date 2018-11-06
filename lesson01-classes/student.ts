import { Person } from "./person";

export class Student extends Person{
    constructor(name: string){
        super(name);
    }

    public getYear(age: number) :void{
        console.log('Studying...');
        super.getYear(25);
    }
}