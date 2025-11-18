
const display = document.getElementById("libraryDisplay");
const bookName = document.getElementById("bookInput");
const bookAuthor = document.getElementById("bookAuthor");
const bookPages = document.getElementById("bookNumber");
var bookRead = document.getElementById("read");


//dialog box
const dialog = document.getElementById("dialog"); // dialogue popup
const addBook = document.getElementById("addBook"); // adds book to array
const openDialog = document.getElementById("seeDialog"); // opens dialogue box
const closeDialog = document.getElementById("addBook")


openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", () => {
    dialog.close();
})
//


let myLibrary = [];


addBook.addEventListener("click", () => {
    
    display.innerHTML = "";
    // this doesnt display current contents of the input box
    let title = bookName.value; // checks array of books, creates input 
    let author = bookAuthor.value;
    let page = bookPages.value;
    let read = bookRead.checked; // check status inside of event listener)
    
    
        if (read === true) {
            read = "read";}

        else { 
            read = "unread"}; // read or unread function dependant on checkbox 
    

    let uuid = self.crypto.randomUUID(); // assigns random uuid
    
    myLibrary.push({ name: `${title}`, author: `${author}`, pages: `${page}`, read: `${read}`, uuid: `${uuid}`});
    // pushes uuid and bookvalue name to array,, note read as checkbox will evaluate to T/F
   

        for (var bookz of myLibrary){
            
           
            display.innerHTML += `<div class='book' id='${bookz.uuid}'>
                                    <h2>Book Title</h2>
                                    <h3>"${bookz.name}"</h3>
                                    <h2>Author</h2>
                                    <h3>${bookz.author}</h3>
                                    <h2>Amount of Pages</h2>
                                    <h3>${bookz.pages}</h3>
                                    <h2>Status</h2>
                                    <button id="readBook-${bookz.read}" class="readButton" type="button">${bookz.read}</button>
                                    <h2>UUID</h2>
                                    <h3>${bookz.uuid}</h3>
                                    <button id="deleteBook-${bookz.uuid}" class="deleteButton" type="button">Delete Book</button>
                                    </div>`}});

        display.addEventListener('click', (event) => {

            if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('readBook-')) {

                const readStatus = event.target;

                flip()

              

                function flip() { // event passes the click event  

                    const btn = readStatus;
                    
                    if (btn.innerHTML === 'read') {
                        btn.innerHTML = 'unread';
                        
                        let mapped = myLibrary.map(item => {
                            
                                item.read = "unread";
                            
                        })

                        // cant understand why it loops through each item, and why delete does not.
                    } 
                    
                    else {
                        if (btn.innerHTML === 'unread') {
                        btn.innerHTML = 'read';

                        let mapped = myLibrary.map(item => {
                            
                                item.read = "read";
                            });
                        };


                
                // smart way to reduce lots of if statements, if button
                // is anything else WHEN CLICKED it returns read.
            }
            console.log(myLibrary.filter(book => book.read))
            }

            }
        })
     // moved read function inside of event handler logic 

                                    
        //let buttons = document.getElementsByClassName("readButton"); // returns html collection
       // containing (all elements with class readButton)
        
            
       


       //for (let btn of buttons){ // for every btn in the HTML collection
           // btn.addEventListener('click',flip);
       //}

       //function flip(event) { // event passes the click event  

            //const btn = event.target;
            
           // if (btn.innerHTML === 'read') {
              //  btn.innerHTML = 'unread';
                
               // let mapped = myLibrary.map(item => {
               //     if (item.read === "read"){
                //        item.read = "unread";
                //    }
                //})

               // console.log(myLibrary.filter(book => book.read))
          //  } 
            
         //   else {
                
                
            //    let mapped = myLibrary.map(item => {
           //         if (item.read === "unread"){
            //            item.read = "read";
             //       }});


              //  console.log(myLibrary.filter(book => book.read))
                // smart way to reduce lots of if statements, if button
                // is anything else WHEN CLICKED it returns read.
           // }
           // }
                       
       // }


            
        display.addEventListener('click', (event) => {

            if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('deleteBook-' + `${myLibrary.uuid}`)) {
                
                const bookDiv = event.target.closest('.book'); // closest method traverses element & parents
                
                    if (bookDiv) { // checks if it is not null or undefined

                        const bookId = bookDiv.id; // uuid of the book
                        // Remove from DOM
                        bookDiv.remove();
                        // removing from array too
                        myLibrary = myLibrary.filter(book => book.uuid !== bookId);

                    }
            }
        });


       // display.addEventListener("click", (event) => {
                
               //if(event.target.id.startsWith("deleteBook-")) {
                //    const uuid = event.target.id.replace("deleteBook-", "");
               //     console.log("button " + uuid + "was clicked")
               //     display.remove("deleteBook-"+ uuid)
               // }
                
                
          //  })
        // this for loop displays entered book titles 
    //let text = myLibrary[0].name + ' ,' + myLibrary[0].uuid; // displays contents of array   

        

   

    


