function button1Clicked() {
    console.log("button 1 clcked")
    const img = document.querySelector('#image-1')
    img.style.rotate='45deg'
}


document.querySelector('[data-button]').addEventListener('click', button1Clicked)

function button2Clicked() {
    console.log("button 2 clicked")
    document.body.style.setProperty('backgound-color', 'green')
}

function textEntered() {
    let text = document.querySelector('[data-text]').value;
    console.log(text)
    const p = document.querySelector('[data-entry]')
    p.textContent = text
}

function dataEntered() {
    // console.log('data-entered');
    const input = document.querySelector('#fruit-text');
    const value = input.value;
    console.log(value)
    const li = document.createElement('li');
    li.innerHTM = value;
    console.log(li);
    const ul = document.querySelector('#fruit-list')
    ul.appendChild(li)




}

function letterTyped() {
    const text = document.querySelector('[data-letters]').value
    // console.log(text)
    const spanText = document.querySelector("#span-text")
    spanText.textContent = text
}