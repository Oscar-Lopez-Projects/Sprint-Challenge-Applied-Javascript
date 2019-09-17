// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">(done)
//    <span class="date">SMARCH 28, 2019</span>(done)
//    <h1>Lambda Times</h1>(done)
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(head) {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    
    const date= document.createElement("span");
    date.classList.add("date");
    date.textContent= 'SMARCH 28, 2019';
    headerDiv.appendChild(date);
    
    const h1 = document.createElement("h1");
  h1.textContent = 'Lambda Times';
  headerDiv.appendChild(h1);

  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = '98';
  headerDiv.appendChild(temp);
    return headerDiv;
}

const mainHead = document.querySelector('.header-container');
mainHead.appendChild(Header());
