const input =document.querySelector('#addTasks > input')
const addBtn =document.querySelector('#addTasks > img')
const tasksBox =document.querySelector('#tasks')
// const deleteBtns =document.querySelectorAll('#tasks > div > img')
const taskList =document.querySelectorAll('#tasks > div ')

const addTask = ()=>{
let task =document.createElement('div')
let textABtn =document.createElement('div')
let btn =document.createElement('img')
let btnBorder =document.createElement('div')
let text =document.createElement('h2')
let img =document.createElement('img')

tasksBox.append(task)
task.append(textABtn)
textABtn.append(btn)
textABtn.append(btnBorder)
textABtn.append(text)
task.append(img)   

btnBorder.classList.add('btnBorder')

btn.src = 'check.png'
img.src = 'trash-can.png'
text.textContent = input.value
btn.style.opacity = "0"

textABtn.addEventListener('click',ev =>{
    if (btn.style.opacity === "0") {
        btn.style.opacity = "1"
        btnBorder.style.border = '1px solid rgba(77, 43, 68, 1)'
        text.classList.add('finish')
    } else {
        btn.style.opacity = "0"
        btnBorder.style.border = '1px solid white'
        text.classList.remove('finish')
    }
    })

    


    
    img.addEventListener('click',ev =>{
        task.remove()
        })



}




// document.querySelectorAll('#tasks > div > img').forEach((item,index) =>{
//     item.addEventListener('click',ev =>{
//         console.log(index);
        
//         })
// })


addBtn.addEventListener('click', ev =>{
    if (input.value !== '') {
    addTask()
    }
    input.value = ''
})
window.addEventListener('keydown',ev=>{
    if (ev.key === 'Enter') {
        if (input.value !== '') {
            addTask()
            }
            input.value = ''
    }
})

