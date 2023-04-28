const categoryButtons = document.querySelectorAll(".main-content-category")
const blogPreview = document.querySelectorAll(".main-content-blog-box");

for (let i = 0; i < categoryButtons.length; i++) {

    const button = categoryButtons[i]
    const category = button.dataset.category;


    button.addEventListener('click', (event)=>{
        event.preventDefault();
        for (let j = 0; j < categoryButtons.length; j++) {
            categoryButtons[j].classList.remove('selected')
        }
    button.classList.add('selected')

    blogPreview.forEach(preview => {
        if(preview.id === category){
            preview.style.display = 'flex'
        }
        else{
            preview.style.display = 'none'

        }
    })

    })

}