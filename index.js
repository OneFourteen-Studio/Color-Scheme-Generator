const schemes = document.getElementById('schemes')
const pHexs = Array.from(document.querySelectorAll('.hex-numbers'))

let colorsArr = []
const colorDivs = Array.from(document.querySelectorAll('.colors'))


document.addEventListener('click', (e) => {
    if(e.target.dataset.button) {
        renderScheme()
    }
})

const renderScheme = () => {
    const seedColorVal = document.getElementById('seed-color').value
    const hexNum = seedColorVal.slice(1,7)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexNum}&mode=${schemes.value}&count=5`)
    .then(res => res.json())
    .then(
        data => {
            
           getScheme(data)
        }
    )

}


const getScheme = (colorData) => {
    colorsArr = colorData.colors.map((color) => {
        return color.hex.value
    })
    
    colorDivs.forEach((div) => {
        div.style.background = colorsArr[colorDivs.indexOf(div)]
    })

    pHexs.forEach((p) => {
        p.textContent = colorsArr[pHexs.indexOf(p)]
    })
}











// https://www.thecolorapi.com/id?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html