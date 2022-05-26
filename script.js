let nav = document.getElementsByTagName('nav')[0]
let h = document.getElementsByTagName('h1')[0]
let header = document.getElementsByTagName('header')[0]
let l = document.getElementsByTagName('label')[0]

nav.style.maxWidth = header.offsetWidth - h.offsetWidth - l.offsetWidth + 'px'
