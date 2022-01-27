/** Pattern definition */
/** Simple book class */
class Book {
  title = ''
  synopsis = ''
  pageNumer = 0

  constructor(title, synopsis, pageNumer) {
    this.title = title
    this.synopsis = synopsis
    this.pageNumer = pageNumer
  }
}

/** Simple movie class */
class Movie {
  title = ''
  synopsis = ''
  duration = 0

  constructor(title, synopsis, duration) {
    this.title = title
    this.synopsis = synopsis
    this.duration = duration
  }
}

/** Interface for a resource that a view want to display */
class IResource {
  getTitle () {}
  getDescription() {}
  getLength() {}
}

/** Resource for a book with mapping inside, contains a book */
class BookResource extends IResource {
  book = null

  constructor(book) {
    super()
    this.book = book
  }

  getTitle() {
    return this.book.title
  }

  getDescription() {
    return this.book.synopsis
  }

  getLength() {
    return this.book.pageNumer + ' pages'
  }
}

/** Resource for a movie with mapping inside, contains a movie */
class MovieResource extends IResource {
  movie = null

  constructor(movie) {
    super()
    this.movie = movie
  }

  getTitle() {
    return this.movie.title
  }

  getDescription() {
    return this.movie.synopsis
  }

  getLength() {
    return this.movie.duration + ' minutes'
  }
}

/** Interface for a view, contains a resource to dislay */
class IView {
  resource = null

  constructor(resource) {
    this.resource = resource
  }

  display() {}
}

/** Simple short view */
class ShortView extends IView {
  display() {
    console.log('--- SHORT VIEW ---')
    console.log(this.resource.getTitle())
    console.log(this.resource.getLength())
  }
}

/** Simple full view */
class FullView extends IView {
  display() {
    console.log('--- FULL VIEW ---')
    console.log(this.resource.getTitle())
    console.log(this.resource.getDescription())
    console.log(this.resource.getLength())
  }
}

/** Pattern usage */
/** Creation of resources */
const bookResource1 = new BookResource(new Book('Les misérables', 'Histoire de Jean Valjean', 1300))
const bookResource2 = new BookResource(new Book('Broadway', "Vie absurde d'Axel", 200))

const movieResource1 = new MovieResource(new Movie('Bienvenue chez les chtis', 'Un mec du sud va habiter dans le nord', 90))
const movieResource2 = new MovieResource(new Movie('Titanic', 'Un bateau coule', 180))

/** Creation et display of views */
new ShortView(bookResource1).display()
new FullView(bookResource1).display()

new ShortView(bookResource2).display()
new FullView(bookResource2).display()

new ShortView(movieResource1).display()
new FullView(movieResource1).display()

new ShortView(movieResource2).display()
new FullView(movieResource2).display()