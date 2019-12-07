import { Relationship } from '../../enums/person.enum';
import { diff_years } from '../../shared/shared_functions';


export class Person {
    fname: string;
    lname: string;
    dob: Date;
    age: number;
    relationship: Relationship;
    gender: string;

    getFname() {
        return this.fname;
    }
    setFname(name: string) {
        this.fname = this.fname;
    }

    getLname() {
        return this.lname;
    }
    setLname(name: string) {
        this.lname = this.fname;
    }

    getAge() {
        const today = Date.now();
        this.age = diff_years(today, this.dob);
        return this.age;
    }

    getRelationship() {
        return this.relationship;
    }
    setRelationship(relationship: Relationship) {
        this.relationship = relationship;
    }

    getGender() {
        return this.gender;
    }
    setGender(gender: string) {
        this.gender = gender;
    }

    getDob() {
        return this.dob;
    }
    setDob(date: Date) {
        this.dob = date;
    }

    
}