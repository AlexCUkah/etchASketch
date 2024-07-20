const container = document.getElementById("gridContainer")
const resetButton = document.getElementById("reset")



const randomColor = () => {
    let colors = ["red", "blue", "orange", "purple", "green", "pink", "silver", "brown"]
    let randomSelector = Math.floor(Math.random() * colors.length)
    return colors[randomSelector]

}
function main() {
    container.innerHTML = ''
    let grid_width = parseInt(prompt("Enter Your width"))
    let grid_length = parseInt(prompt("Enter Your length"))

    container.style.width = `${grid_width * 20}px`
    container.style.height = `${grid_length * 20}px`

    for (let i = 0; i < grid_width * grid_length; i++) {
        const squareDivs = document.createElement("div")
        squareDivs.classList.add("grid-item")
        squareDivs.style.height = `${100 / grid_length}%`
        squareDivs.style.width = `${100 / grid_width}%`
        container.appendChild(squareDivs)
        console.log("successful")

        squareDivs.addEventListener("mouseenter", () => {
            squareDivs.style.backgroundColor = randomColor()
            console.log("color Changed")
        })
    }

}



document.addEventListener("DOMContentLoaded", () => {
    main()
    resetButton.addEventListener("click", () => {
        main()
    })

})