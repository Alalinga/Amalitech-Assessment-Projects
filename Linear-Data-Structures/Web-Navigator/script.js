const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack()
const nextPages = new Stack();
let currentPage = '';
let finish = false;
let showBack = false;
let showNext = false;

// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage= (action)=>{
  let info = `user action: ${action}. current page: ${currentPage}. back page: ${backPages.peek()}. next page: ${nextPages.peek()} `
   console.log(info);
   
}

const newPage=(page)=>{
  backPages.push(currentPage);
  currentPage = page;
  while(!nextPages.isEmpty()){
  nextPages.pop();
  }
  showCurrentPage("New: ")
}
const backPage = ()=>{
  nextPages.push(currentPage)
   currentPage = backPages.pop();
   showCurrentPage("Back: ")
}

const nextPage=()=>{
  backPages.push(currentPage);
 currentPage = nextPages.pop();
 showCurrentPage("Next: ")

}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
showCurrentPage('DEFAULT: ');

while(finish === false){
let instructions = baseInfo;
if(backPages.peek() != null){
  instructions+=', '+backInfo
  showBack = true;
}else{
  showBack = false;
}

if(nextPages.peek()!==null){
  instructions+=', '+nextInfo
  showNext = true;
   
}else{
  showNext = false;
}

instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);



  // ------------------------------
  // User Interface Part 2
  // ------------------------------

  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();
  if ((lowerCaseAnswer !== 'n') && (lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'q')) {
    // we create a new page based on the url
    newPage(answer);
  }else if ((showNext === true) && (lowerCaseAnswer === 'n')) {
    // we navigate forward a page
    nextPage();
  } else if ((showBack === true) && (lowerCaseAnswer === 'b')) {
    // we navigate back a page
    backPage();
  }  else if (lowerCaseAnswer === 'b') {
    // invalid input to a non-available option
    console.log('Cannot go back a page. Stack is empty.');
  } else if (lowerCaseAnswer === 'n') {
    // invalid input to a non-available option
    console.log('Cannot go to the next page. Stack is empty.');
  }else if (lowerCaseAnswer === 'q') {
    // we quit the program
    finish = true;
  }
}
