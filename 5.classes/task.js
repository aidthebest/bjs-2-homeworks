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

class Magazine extends PrintEditionItem() {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "magazine";    
    }   
}

class Book extends PrintEditionItem() {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";    
    }   
}

class Novelbook extends Book() {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class Fantastic extends Book() {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class Detective extends Book() {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}