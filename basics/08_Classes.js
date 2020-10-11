// DOM
// https://developer.mozilla.org/ru/docs/DOM/DOM_Reference/Введение
// https://developer.mozilla.org/ru/docs/DOM/DOM_Reference
// https://developer.mozilla.org/ru/docs/Web/API/Node
// https://developer.mozilla.org/en-US/docs/Web/CSS
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units

// https://developer.mozilla.org/en-US/docs/Web/CSS/padding
// https://developer.mozilla.org/ru/docs/Web/CSS/display
// https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Flow_Layout
function addStylesTo(node, text = 'Changed from JavaScript!', color = 'red', fSize = '2rem') {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '0.5rem 0rem'
    node.style.display = 'block'
    node.style.width= '100%'
    if (fSize) {
        node.style.fontSize = fSize
    }
}

const outputH = (node, text, color, fSize, timeout) => {
    setTimeout(() => addStylesTo(node, text, color, fSize), timeout)
}

//https://www.w3.org/TR/selectors-api/
const headH1 = document.getElementById('h1id')
// document.getElementsByTagName('h1')
// document.getElementsByClassName('h1class')

outputH(headH1, 'Quadratisch', 'blue', undefined, 500)

// https://developer.mozilla.org/ru/docs/Web/API/Document/querySelector
const headH2 = document.querySelector('.h2cl')
//document.querySelector('#h2id')
outputH(headH2, 'Practisch', 'yellow', undefined, 1000)


const headH3 = headH2.nextElementSibling
outputH(headH3, 'Gut', 'Green', undefined, 1500)

const h2list = document.querySelectorAll('h2')
const link = h2list[1].children[0]

// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent
// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
link.addEventListener('click', function (event) {
    invColor(this)
    event.preventDefault()
    //console.log('Ctrl?:',event.ctrlKey)
    const url = event.target.getAttribute('href')
    window.location = url
})

outputH(link, '!!!', undefined, '3rem', 2000)



// console.log(headH2)
// console.dir(headH2)

// Web events
// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/События
// https://developer.mozilla.org/en-US/docs/Web/Events

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

headH1.onclick = function () {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    headH1.style.backgroundColor = rndCol;
}

function invColor(elem) {
    if (elem.style.color === 'red') {
        elem.style.color = '#000'
        elem.style.backgroundColor = '#FFF'
    } else {
        elem.style.color = 'red'
        elem.style.backgroundColor = '#000'
    }
}

headH2.ondblclick = function () {
    invColor(this)
}

headH3.onmouseover = function () {
    invColor(this)
}

headH3.onmouseout = function () {
    invColor(this)
}



// var rootElement = document.documentElement
// var childsHTML = rootElement.children

// console.log("", rootElement.tagName)

// for (let i = 0; i < childsHTML.length; i++) {
//     console.log("  ", childsHTML[i].tagName)

//     for (let j = 0; j < childsHTML[i].children.length; j++) {
//         console.log("    ", childsHTML[i].children[j].tagName)
//     }
// }