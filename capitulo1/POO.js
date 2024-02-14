function Book(title, pages, author){
    this.title = title
    this.pages = pages
    this.author = author
    this.printBookResume = function(){
        console.log(`O livro ${this.title} do autor ${this.author}contém ${this.pages} páginas.`)
    }
    this.printBookResume()
}

Book("O mundo assombrado por demonios",537, "Carl Sagan" )