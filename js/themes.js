const pageheader = document.getElementById("themesheader")
const underscore = document.getElementById("underscore")
async function setpageheadtext(){
    const text = "Customizability"
    var currenttxt = pageheader.textContent

    for (const x of text)
    {
        let p = new Promise((resolve) =>{
            setTimeout(() => {
                currenttxt += x
                pageheader.textContent = currenttxt 
                resolve()
            }, 25);
        })

        await p.then(()=>{})

    }

    async function timer()
    {
        let p = new Promise((resolve) =>{
            setTimeout(() => {
            underscore.style.opacity = 0
            setTimeout(() => {
                resolve()
            }, 250);
            }, 250);
        })

        await p.then((r)=>{
            underscore.style.opacity = 1
            timer()
        })

        
    }timer()

} setpageheadtext()