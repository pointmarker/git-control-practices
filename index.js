/**
 * when you press double click on cells of table
 * it will turn input el and let you write whatever you want
 * then you can keep it like that
 */

const tbody = document.querySelector("table").querySelector("tbody")

tbody.addEventListener('dblclick', (e) => {
    if(e.target.tagName.toLowerCase() == "td"){
        const inputEl = document.createElement('input')
        const tdEl = e.target

        inputEl.value = e.target.textContent
        inputEl.style.height = "100%"
        inputEl.style.padding = "5px"

        tdEl.textContent = ""
        tdEl.appendChild(inputEl)
        inputEl.focus()

        inputEl.addEventListener('blur', () => {
            tdEl.textContent = inputEl.value
        })

        inputEl.addEventListener('keydown',(e) => {
            if(e.key == "Enter"){
                inputEl.blur()
            }
        })
    }
})