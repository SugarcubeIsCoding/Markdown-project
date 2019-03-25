import crel from 'crel'
import marked from 'marked'

export function renderDocument(markdown) {
    // marked() converts a string containing markdown to a string containing HTML 
    const html = marked(markdown)

    // we use innerHTML to convert the string to DOM nodes
    const container = crel('div')
    container.innerHTML = html

    return container
}
