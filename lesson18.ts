// methods in class

class Person18{
    ls18_name : string;
    constructor(ls18_name:string){
        this.ls18_name = ls18_name;
        console.log(this.ls18_name + " constructor.");
    }

    static talk(){
        console.log('This static method is taik');
    }

    run18(){
        console.log('Person is running....');
    }
}

let p = new Person18("Thao");
p.run18();
Person18.talk();