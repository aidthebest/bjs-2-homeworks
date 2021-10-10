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
        if (number < 0) {this._state = 0} 
        else if(number > 100) {this._state = 100}
        this._state = number
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
        type = "magazine";     
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
        type = "fantastic";
}

class DetectiveBook extends Book {
        type = "detective"
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

class Student {
    constructor(name, gender, age){
        this.name = name,
        this.gender = gender,
        this.age = age
    }

    addMark(subjectName, mark) {
        
    }
}

  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
      this.marks = [];
    }
    if (0 < mark < 6) {this.marks.push(mark);
    } else console.log("Ошибка, оценка должна быть числом от 1 до 5")   
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

  Student.prototype.getAverageBySubject = function(subject) {
      
  }



  //сперто
//   class Student {
//     constructor(name, gender, age) {
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         this.marks = new Map();
//     }
//     addMark(mark, subjectName) {
//         if (mark < 1 || mark > 5) {
//             return console.error("Ошибка, оценка должна быть числом от 1 до 5.");
//         }
//         let markZ = this.marks.get(subjectName);
//         if (markZ === undefined) {
//             markZ = [mark];
//         } else {
//             markZ.push(mark);
//         }
//         this.marks.set(subjectName, markZ);
//     }
//     getAverageBySubject(subjectName) {
//         if (!this.marks.has(subjectName)) {
//             return console.error("Несуществующий предмет.");
//         }
//         let sum = 0;
//         if (this.marks.get(subjectName) === undefined) {
//             return console.error(`Нет оценок по данному предмету.`);
//         } else {
//             for (let el of this.marks.get(subjectName)) {
//                 sum += el;
//             }
//             return sum / this.marks.get(subjectName).length;
//         }
//     }
//     getAverage() {
//         let sum = 0;
//         for (let key of this.marks.keys()) {
//             sum += this.getAverageBySubject(key);
//         }
//         return sum / this.marks.size;
//     }
// }
// Student.prototype.exclude = function (reason) {
//     delete this.marks;
//     this.excluded = reason;
// }