import { Dao } from './dao';
import { Person } from './../lesson01-classes/person';
import { DaoInterface } from './dao.interface';


let dao: Dao<Person> = new Dao<Person>(); 
let person: Person = new Person('Mike');

dao.insert(person);
