console.log("This is Exercise about Exercise in Classes");
//Create a class library and implement the following :
//Constructor must take the book list as an argument
//getBookList(bookname,user)
//returnBook(bookname)

class library{
    constructor(Maths,Algorithm,Automata,Biology){
        this.Maths=Maths;
        this.Algorithm=Algorithm;
        this.Automata=Automata;
        this.Biology=Biology;
    }
    getBookList(){
        console.log(this.Maths,this.Algorithm,this.Automata,this.Biology);
    }

    issueBook(bookname,user){
        return `The book of ${this.Maths} has been issued to ${user}`;
    }
    returnBook(bookname){
        return `The book of ${this.Algorithm} has been returned`;
    }
}

let library1= new library('Maths','Algorithm','Automata','Biology');
console.log(library1);
console.log(library1.getBookList());
console.log(library1.issueBook(this.Maths,'Nisha'));
console.log(library1.returnBook(this.Algorithm));