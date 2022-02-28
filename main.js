const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let number_wrapper = document.getElementById('number-wrapper');
numbers.map((num) => {
    let ele = document.createElement('div')
    ele.classList.add(`color-${num}`)
    ele.innerText = num
    number_wrapper.appendChild(ele)
})
const shuffle = () => {
    // Shuffle logic
    // console.log(numbers.sort(() => Math.random() - 0.5))
}
const short = () => {
    // Short logic
}