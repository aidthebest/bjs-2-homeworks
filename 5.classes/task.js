class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
        if (this.state > 100) {this.state = 100};
        return this.state
    }

    set state(number) {
        if (number < 0) {number = 0} 
        else if(number > 100) {number = 100}
        else number = number
        this._state = number
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";    
    }   
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";    
    }   
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy("name", bookName);
        let index = this.books.indexOf(book);
        if (index > -1) {
            this.books.splice(index, 1);
        }
        return book;
    }
}


function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
      this.marks = [];
    }
    this.marks.push(mark);
  }
  Student.prototype.addMarks = function (...mark) {
    if (this.marks === undefined) {
      this.marks = [];
    }
    this.marks.push(...mark);
  }
  
  Student.prototype.getAverage = function () {
    let sum = this.marks.reduce((total, amount) => total + amount);
    return (sum / this.marks.length);
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }