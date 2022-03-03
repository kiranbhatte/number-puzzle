// append element to Dom 
const set_board = (numbers) => {
    let number_wrapper = document.getElementById('number-wrapper');
    // reset number wrapper before using
    number_wrapper.innerHTML = ""
    numbers.map((num) => {
        let ele = document.createElement('div')
        ele.classList.add(`color-${num}`)
        ele.innerText = num
        number_wrapper.appendChild(ele)
    })
}
// default board numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Intial page data set method
set_board(numbers);

// shuffle default board numbers
const shuffle = () => {
    // Shuffle default board numbers
    let nums = []
    numbers.map(element => {
        nums.push(element)
    });
    nums = nums.sort(() => Math.random() - 0.5)
    // put shuffle data
    set_board(nums)
}
// sort default board numbers
const short = () => {
    set_board(numbers)
}