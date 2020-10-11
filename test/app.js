function cl(...args) {
  console.log(...args)
}

function cd(...args) {
  console.dir(...args)
}

function foo(arg = 'Лось') {
  const arr = []
  const a = [...document.querySelectorAll('li')]
    .forEach(e => new String(e.innerText)
      .indexOf(arg) == 0 ? arr.push(e.innerText) : void 0)

  return arr
}
foo('Лось')

// inspect($0)

// 'innerText' in document.body // true

const a = [...document.querySelectorAll('li')][0].firstChild.nodeValue

document.constructor // HTMLDocument
document.documentElement.constructor // HTMLHtmlElement <html>
document.body.constructor // HTMLBodyElement <body>
document.head.constructor // HTMLHeadElement <head>
// cl(document.constructor.name) 

document.body.childNodes.constructor // NodeList
document.body.children.constructor // HTMLCollection

// cl('-------------------')
// for (let n of elBdChdNds) { cl(`tagName: ${n.tagName}, data: ${n.data}, class: ${n.constructor.name}`)}
// cl('-------------------')
// for (let e of elBdChdEls) { cl(`tagName: ${e.tagName}, data: ${e.data}, class: ${e.constructor.name}`)}
// cl('-------------------')

// Node
// childNodes
// firstChild, lastChild
// previousSibling, nextSibling
// parentNode


// Element:
// children
// firstElementChild, lastElementChild
// previousElementSibling, nextElementSibling
// parentElement

// static+document/element+cssSelector
document.querySelector('ol').constructor // HTMLOListElement
// HTMLTableElement, HTMLTableCaptionElement
// HTMLTableSectionElement, HTMLTableRowElement
// HTMLTableCellElement, HTMLDivElement
// HTMLUListElement, HTMLLIElement ...

document.querySelectorAll('ul > li:last-child') // NodeList
const chapter = document.querySelector('.contents').querySelectorAll('.chapter')[0]
chapter.closest('.book')

// [...document.querySelectorAll('a')].forEach(e => e.matches('a[href$="zip"]') ? cl(`${e.href}, ${e.text}`) : void 0)

// static+document+id
document.getElementById('elem')

// live+document/element+tag/class
elem.getElementsByTagName('tag')
elem.getElementsByClassName('class')

// live+document+name
document.getElementsByName('name')

// Table
// table.rows/caption/tHead/tFoot/tBodies 
// tbody.rows
// tr.cells/sectionRowIndex/rowIndex
// td.cellIndex

const tt = document.querySelector('#table1')

// innerHTML вставляет <script>, но он не запускается.
// outerHTML не изменяет элемент. а заменяет целиком во внешнем контексте
tt.rows[0].cells[1].innerHTML // cell value

let capt = tt.createCaption()

capt.textContent = 'Про лосей'
capt.style.fontFamily = 'Arial'
capt.style.fontStyle = 'italic'
capt.style.backgroundColor = 'yellow'

tt.style.textAlign = 'center'
tt.align = 'center'
tt.border = 1
tt.width = 500
tt.cellPadding = 5

let rr = tt.insertRow(1)
let newCell = rr.insertCell(0);
let newCell2 = rr.insertCell(1);
newCell.innerHTML = 'test1'
newCell2.innerHTML = 'test2'

function addRow(tableID) {
  let tableRef = document.getElementById(tableID);
  let newRow = tableRef.insertRow(-1); // append
  let newCell = newRow.insertCell(0); // at index
  
  let newText = document.createTextNode('New bottom row');
  newCell.appendChild(newText);
}


addRow('table2');







