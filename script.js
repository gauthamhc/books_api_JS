const bookBtn = document.getElementById("book");
const booksEL = document.getElementById("books-section");

// const createNode = (element) => {
//   return document.createElement(element);
// };
// const append = (parent, el) => {
//   return parent.appendChild(el);
// };
//functions
const url = "https://content-store.explore.bfi.digital/api/articles";

const eventAction = () => {
  console.log("hello");
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let books = data.data;
      booksEL.innerHTML = books
        .map(
          (book) =>
            `<div class="book">
           
        <h3 class='book-title'>${book.title}</h3>
        <img src=${book.primary_image.url}>
        <p>${book.summary}</p>
        </div>
        `
        )
        .join("");
    })
    .catch(function (error) {
      console.log(error);
    });
};
//add event listeners
bookBtn.addEventListener("click", eventAction);

// fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       let books = data.data;
//       return books.map((book) => {
//         let div = createNode("div");
//         let h3 = createNode("h3");
//         h3.innerHTML = `${book.title}`;
//         append(div, h3);
//         console.log(`${book.title}`);
//       });
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
