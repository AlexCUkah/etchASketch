const container = document.getElementById("gridContainer")
const resetButton = document.getElementById("reset")


const randomColor = () => {
    let colors = ["red", "blue", "orange", "purple", "green", "pink", "silver", "brown"]
    let randomSelector = Math.floor(Math.random() * colors.length)
    return colors[randomSelector]

}

const createGrid = (width, height) => {
    container.style.width = `${width * 20}px`
    container.style.height = `${height * 20}px`

    for (let i = 0; i < width * height; i++) {
        const squareDivs = document.createElement("div")
        squareDivs.classList.add("grid-item")
        squareDivs.style.height = `${100 / height}%`
        squareDivs.style.width = `${100 / width}%`
        squareDivs.dataset.colorSet = "false"
        container.appendChild(squareDivs)
        console.log("successful")

        squareDivs.addEventListener("mouseenter", () => {
            if (squareDivs.dataset.colorSet === "false") {
                squareDivs.style.backgroundColor = randomColor()
                squareDivs.dataset.colorSet = "true"
                console.log("color Changed")
            }
        })
    }
}


function validation(value) {
    let valid = false
    while (!valid) {
        let valueOf = parseInt(prompt(`Enter your ${value} Has to be a number between 0 and 100`))
        if (isNaN(valueOf) || valueOf <= 0 || valueOf > 100) {
            alert("Invalid Value Number must be between 0 and 100")
        } else {
            valid = true
            return valueOf
        }
    }
}


function main() {
    container.innerHTML = ''
    let grid_width = validation("width")
    let grid_length = validation("height")


    createGrid(grid_width, grid_length)


}


document.addEventListener("DOMContentLoaded", () => {
    main()
    resetButton.addEventListener("click", main)


})
