let bookTitle = $('#bookTitle'),
  bookAuth = $('#bookAuth'),
  bookPage = $('#bookPage'),
  readStatus = $('#readStatus'),
  regBtn = $('#regBtn'),
  addBooksBtn = $('#addBooksBtn'),
  toggle = $('#toggle'),
  toggleTable = $('#toggleTable'),
  bookIndex,
  books = [];

addBooksBtn.on('click', function () {
  toggle.toggleClass('hideForm');
  addBooksBtn.hide()
});
regBtn.on('click', function () {
  let aBook = {
    'bookTitle': bookTitle.val(),
    'bookAuth': bookAuth.val(),
    "bookPage": bookPage.val(),
    "readStatus": readStatus.val()
  }

  if (bookIndex == null) {
    books.push(aBook)
  } else {
    books[bookIndex] = aBook
    bookIndex = null
    regBtn.html("Add Data")
  }
  clearForm()
  loadBooksData();
});

$("#tbody").on('click', '.editBtn', function () {
  bookIndex = $(this).attr("indexData")
  bookTitle.val(books[bookIndex]["bookTitle"])
  bookAuth.val(books[bookIndex]["bookAuth"])
  bookPage.val(books[bookIndex]["bookPage"])
  readStatus.val(books[bookIndex]["readStatus"])
  toggle.show()
  addBooksBtn.hide()
  regBtn.html("Update Data")
})

$("#tbody").on('click', '.deleteBtn', function () {
  let shouldDelete = confirm("Do you want to delete this record?")
  if (shouldDelete) {
    let deleteIndex = $(this).attr("indexData")
    books.splice(deleteIndex, 1)
    loadBooksData()
  }
})

function loadBooksData() {
  let rows = '';
  for (let index = 0; index < books.length; index++) {
    rows += `<tr>
    <td> ${index + 1}</td>
    <td> ${books[index]['bookTitle']}</td>
    <td> ${books[index]['bookAuth']}</td>
    <td> ${books[index]['bookPage']}</td>
    <td> ${books[index]['readStatus']}</td>
    <td> <a href="#" indexData="${index}" class="editBtn" >Edit</a> | <a href='#' indexData="${index}" class="deleteBtn">Delete</a></td>  
    </tr>`;
  }
  $('#tbody').html(rows);
}

function clearForm() {
  bookTitle.val("")
  bookAuth.val("")
  bookPage.val("")
  readStatus.val("")
  toggle.toggleClass('hideForm');
  addBooksBtn.show()
}



