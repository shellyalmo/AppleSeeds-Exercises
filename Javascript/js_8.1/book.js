const book = {
  title: "The Island",
  author: "Barbara Levinsky",
  publishYear: 1994,
  summary:
    "A story about a sunk ship that has only one survivor who colonized an entire deserted island in the Bahamas.",
  numPages: 325,
};

const bookDesc = (bookObj) => {
  return `The book ${bookObj.title} was written by ${bookObj.author} in the year ${bookObj.publishYear}`;
};

console.log(bookDesc(book));
