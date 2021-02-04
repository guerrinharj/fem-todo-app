const mainTag = document.querySelector('.main')
const backgroundTag = document.querySelector('.background-area')
const switchTag = document.querySelector('.site-switcher')
const iconTag = document.querySelector('.night-switch')
const inputAreaTag = document.querySelector('.input-area')
const inputTag = inputAreaTag.querySelector('input')
const todoListTag = document.querySelector('.todo-list-area')
const listAreaTag = document.querySelector('.list-status-area')
const dragAreaTag = document.querySelector('.drag-area')
const mobileAreaTag = document.querySelector('.mobile-status-area')
const numberItems = document.querySelector('.number-items')




switchTag.addEventListener('click', () => {
    mainTag.classList.toggle('main-dark')
    backgroundTag.classList.toggle('background-area-dark')
    iconTag.classList.toggle('day-switch')
    inputAreaTag.classList.toggle('input-area-dark')
    todoListTag.classList.toggle('todo-list-area-dark')
    listAreaTag.classList.toggle('list-status-area-dark')
    dragAreaTag.classList.toggle('drag-area-dark')
    mobileAreaTag.classList.toggle('mobile-status-area-dark')
})




function removeEl(el) {
    el.remove();
 }

function clickEl(el) {
     el.classList.toggle('checked');
 }

function updateCount() {

    const itemsLi = todoListTag.querySelectorAll('li')

    const checked = todoListTag.querySelectorAll('.checked')


    numberItems.innerHTML = itemsLi.length - checked.length
}








inputTag.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        
        const item = document.createElement('li')
        let inputValue = inputTag.value;
        let text = document.createTextNode(inputValue);

        

        const checker = document.createElement('div')
        checker.classList.add('list-icon')


        var img = document.createElement("img");

        img.src = "./images/icon-cross.svg"
        img.className = 'list-close'
        



        item.appendChild(checker);
        item.appendChild(text);
        item.appendChild(img);


        


        

        if (inputValue === '') {
            
            const warningTag = document.querySelector('.warning')

            warningTag.style.opacity = "1"

            document.addEventListener('mousemove', () => {
            
            warningTag.style.opacity = "0"

            })

        } else {

            const listTag = document.querySelector('.the-list')
            listTag.appendChild(item)
            inputTag.value = ''


            const itemsLi = todoListTag.querySelectorAll('li')
            numberItems.innerHTML = itemsLi.length
            

            

            img.addEventListener('click', () => {
                removeEl(item) 
                
                const itemsLi = todoListTag.querySelectorAll('li')
                numberItems.innerHTML = itemsLi.length
                
            })

            checker.addEventListener('click', () => {
                clickEl(checker);
                updateCount()
            })
          
        }
    }
})




const allTag = document.querySelectorAll('#all')
const activeTag = document.querySelectorAll('#active')
const completedTag = document.querySelectorAll('#completed')

const clearcompletedTag = document.querySelector('.clear-completed-area')



allTag.forEach(all => {

    all.addEventListener('click', () => {
        const itemsLi = todoListTag.querySelectorAll('li')
    
        itemsLi.forEach(item => {
            item.classList.remove('item-invisible')
        })
    })
    
})

activeTag.forEach(active => {

    active.addEventListener('click', () => {     
        const itemsLi = todoListTag.querySelectorAll('li')
        
    
        itemsLi.forEach(item => {
            
            if (!item.querySelector('.checked')) {
                item.classList.remove('item-invisible')
            } else if (item.querySelector('.checked')) {
                item.classList.add('item-invisible')
            }
            
            
    
        })
    })

})



completedTag.forEach(completed => {

    completed.addEventListener('click', () => {
        const itemsLi = todoListTag.querySelectorAll('li')
        
        itemsLi.forEach(item => {
            
            if (!item.querySelector('.checked')) {
                item.classList.add('item-invisible')
            } else if (item.querySelector('.checked')) {
                item.classList.remove('item-invisible')
            }

        })
       
    })

})


clearcompletedTag.addEventListener('click', () => {
    const itemsLi = todoListTag.querySelectorAll('li')

    itemsLi.forEach(item => {
        item.remove()
    })

    numberItems.innerHTML = '0'


})














