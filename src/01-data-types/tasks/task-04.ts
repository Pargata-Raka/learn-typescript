/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type books = {
    ISBN: string
    Title: string
    Author: string
    Pages: number
    Category: String
    IsAvailable: Boolean
}

const Batch67 : books[] = [
    { ISBN: `0897`, Title: `1984`, Author: `George Orwell`, Pages: 250, Category: `Fiction`, IsAvailable: true},
    { ISBN: `0067`, Title: `How to Full Stack`, Author: `Fullios Stackos`, Pages: 80, Category: `Education`, IsAvailable: false},
    { ISBN: `1111`, Title: `Kisah dan Hadits Nabi Muhammad SAW`, Author: `Ahmad Katib`, Pages: 111, Category: `Religion`, IsAvailable: true}
]

Batch67.forEach(row => {
  console.log(`ISBN: ${row.ISBN} | Title: ${row.Title}| Author: ${row.Author}| Pages: ${row.Pages} | Category: ${row.Category}| Is Availible Now: ${row.IsAvailable}`);
});