const button = document.querySelector('#openModal')
const home = document.querySelector('.home')
const modal = document.querySelector('.modal')

function openModal() {
    home.style.display = 'none'
    modal.style.display = 'flex'
}

function closeModal() {
    modal.style.display = 'none'
    home.style.display = 'flex'
}



button.addEventListener('click', openModal)
document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'
    if(home.style.display === 'none'){
        if(isEscKey){
            closeModal()
        }
    }
})