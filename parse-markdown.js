import {marked} from 'marked'

const html = marked.parse("# Apresentação Plus")

console.log(html)