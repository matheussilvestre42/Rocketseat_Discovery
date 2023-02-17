// getElementById()

/* const element = document.getElementById('blog-title')
 */

//getElementsByClassName()

/* const element = document.getElementsByClassName('one') */

//getElementsByTagName

/* const element = document.getElementsByTagName('h1') */

//querySelector

/* const element = document.querySelector('[src]') */

//querySelectorAll
//nodeList(pode-se uasar o forEach)

const elements = document.querySelectorAll('.one')
console.log(elements)

elements.forEach(el => console.log(el))


//Qual usar

//getElementById (element)
//getElementsByClassName (HTMLCollection)
//getElementsByTagName (HTMLCollection)
//querySelector (element)
//querySelector (NodeList)