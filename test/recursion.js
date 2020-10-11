function O(opt) {
    this.name = opt.name
    this.childNodes = opt.childNodes
    this.nextSibling = opt.nextSibling
    this.parentNode = opt.parentNode
    this.firstChild = function () {
        if (this.childNodes != undefined) {
            return this.childNodes[0]
        }
        return undefined
    }
}

var li2 = new O({ name: 'li2', childNodes: undefined, nextSibling: undefined, parentNode: ul })
var li1 = new O({ name: 'li1', childNodes: undefined, nextSibling: li2, parentNode: ul })
var ul = new O({ name: 'ul', childNodes: [li1, li2], nextSibling: undefined, parentNode: div })
var em = new O({ name: 'em', childNodes: undefined, nextSibling: ul, parentNode: div })
var strong = new O({ name: 'strong', childNodes: undefined, nextSibling: undefined, parentNode: a })
var a = new O({ name: 'a', childNodes: [strong], nextSibling: em, parentNode: div })
var div = new O({ name: 'div', childNodes: [a], nextSibling: strong, parentNode: body })
var input1 = new O({ name: 'input1', childNodes: undefined, nextSibling: undefined, parentNode: cell1 })
var input2 = new O({ name: 'input2', childNodes: undefined, nextSibling: undefined, parentNode: cell2 })
var button = new O({ name: 'button', childNodes: undefined, nextSibling: undefined, parentNode: cell3 })
var cell3 = new O({ name: 'cell3', childNodes: [button], nextSibling: cell3, parentNode: row3 })
var cell2 = new O({ name: 'cell2', childNodes: [input2], nextSibling: cell2, parentNode: row2 })
var cell1 = new O({ name: 'cell1', childNodes: [input1], nextSibling: cell1, parentNode: row1 })
var row3 = new O({ name: 'row3', childNodes: [cell3], nextSibling: undefined, parentNode: tbody })
var row2 = new O({ name: 'row2', childNodes: [cell2], nextSibling: row3, parentNode: tbody })
var row1 = new O({ name: 'row1', childNodes: [cell1], nextSibling: row2, parentNode: tbody })
var tbody = new O({ name: 'tbody', childNodes: [row1, row2, row3], nextSibling: tbody, parentNode: table })
var caption = new O({ name: 'caption', childNodes: undefined, nextSibling: tbody, parentNode: table })
var table = new O({ name: 'table', childNodes: [tbody], nextSibling: div, parentNode: body })
var h1 = new O({ name: 'h1', childNodes: undefined, nextSibling: table, parentNode: body })
var body = new O({ name: 'body', childNodes: [h1, table, div], nextSibling: head, parentNode: html })
var title = new O({ name: 'title', childNodes: undefined, nextSibling: undefined, parentNode: head })
var head = new O({ name: 'head', childNodes: [title], nextSibling: undefined, parentNode: html })
var html = new O({ name: 'html', childNodes: [head, body], nextSibling: undefined, parentNode: undefined })

function deep(node) {
    if (node === undefined) {
        console.log('node is empty!!!')
        return
    }
    console.log(node.name)
    deep(node.firstChild())
    wide(node.nextSibling)
}

function wide(node) {
    if (node != undefined) {
        deep(node.firstChild())
    }
    if (node.nextSibling != undefined) {
        wide(node.nextSibling)
    }
}

deep(html)