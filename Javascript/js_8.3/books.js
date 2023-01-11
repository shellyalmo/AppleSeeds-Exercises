const book1 = {
  name: "Silly Book",
  author: "Robert Gahn",
  year: 1987,
};
const book2 = {
  name: "Scary Book",
  author: "Gina Chou",
  year: 2001,
};
const bookUtils = {
  getFirstPublished: function (bookObj1, bookObj2) {
    return bookObj1.year < bookObj2.year ? bookObj1 : bookObj2;
  },
  setNewEdition: function (bookObj, editionYear) {
    bookObj["latestEdition"] = editionYear;
    return bookObj;
  },
  setLanguage: function (bookObj, language) {
    bookObj["language"] = language;
    return bookObj;
  },
  setTranslation: function (bookObj, language, translator) {
    bookObj["translation"] = { translator: translator, language: language };
    return bookObj;
  },
  setPublisher: function (bookObj, name, location) {
    bookObj["publisher"] = { name: name, location: location };
    return bookObj;
  },
  isSamePublisher: function (bookObj1, bookObj2) {
    return bookObj1.publisher.name === bookObj2.publisher.name &&
      bookObj1.publisher.location === bookObj2.publisher.location
      ? true
      : false;
  },
};
console.log(bookUtils.getFirstPublished(book1,book2))
console.log(bookUtils.setNewEdition(book1,1993))
console.log(bookUtils.setLanguage(book2, "Spanish"));
console.log(bookUtils.setTranslation(book2, "English", "Micky Garcia"));
console.log(bookUtils.setPublisher(book2, "Rare Books", "Barcelona,Spain"));
console.log(bookUtils.setPublisher(book1, "New Books", "Barcelona,Spain"));

console.log(bookUtils.isSamePublisher(book2, book1));
