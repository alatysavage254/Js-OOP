const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`
    }
}

// Create Object
//const book1 = Object.create(bookProtos);
//book1.title = 'Book One'
//book1.author = 'alaty savage'
//book1.year = '2023'

const book1 = Object.create(bookProtos, {
title: { value: 'Book One'},
author: { value: 'alaty savage'},
year: { value: '2023'}
})

console.log(book1)