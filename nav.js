function createButtons(attributes) {
    const buttons=[]
    attributes.forEach(elements => {
        const newButton=document.createElement('button');
        document.body.appendChild(newButton)
        newButton.id=elements[0];
        newButton.innerHTML=elements[1];
        newButton.classList.add('contracted');
        newButton.classList.add('menu')
        buttons.push(newButton)
    });
    return buttons
}

// HTML Creation
[nactivate,games,home]=createButtons([['navButton','Navigation'],['gamButton','Games!'],['homButton','Home']])
games.addEventListener('click',()=>{window.location.href = "https://sharkyweb-dotcom.github.io/BlissfulGaming/Tic-Tac-Toe/tic.html"})
home.addEventListener('click',()=>{window.location.href='https://sharkyweb-dotcom.github.io/BlissfulGaming/'})

// JS Functionality
function pand() {
    if (nactivate.classList.contains('contracted')) {
        Object.values(document.getElementsByClassName('menu')).forEach((element)=>{
            element.classList.add('expanded')
            element.classList.remove('contracted')
        })
    } else {
        Object.values(document.getElementsByClassName('menu')).forEach((element)=>{
            element.classList.add('contracted')
            element.classList.remove('expanded')
        })
    }
}
nactivate.addEventListener('click',pand)

document.body.appendChild(nactivate);