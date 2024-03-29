//const s1 = 'Hello';
//console.log(typeof s1)

//const s2 = new String('Hello')
//console.log(typeof s2)

//console.log(window)
//alert(1)
//console.log(navigator.appVersion)
//console.log(navigator.userAgent);

// Object Literal
const book1 = {
    title: 'Book One',
    author: 'alaty savage',
    year: '2023',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 = {
    title: 'Book Two',
    author: 'vicky Limo',
    year: '2024',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//console.log(book1.getSummary())
//console.log(book2.getSummary())

//console.log(Object.values(book1))
console.log(Object.values(book1))