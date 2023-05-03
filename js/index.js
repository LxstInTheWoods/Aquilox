const thing = document.getElementById("SSINTRO")

const divid_top = document.getElementById("divid_top")

const typewrite = document.getElementById("csttpwrt2")

const aqhead = document.getElementById("aqhead")



thing.animate([{opacity:1}], {duration:500, fill:'forwards'})

setTimeout(() => {
    divid_top.animate([{width:"85%"}], {duration:450, fill:"forwards"})
    aqhead.animate([{opacity:1}], {duration:250, fill:"forwards"})

    const str = "Bringing unlimited customization to lego cheating.."
    var cur = ""
    _ = async () =>{
    for (const x of str)
    {


            let p = new Promise((r) =>{
                setTimeout(() => {
                    cur += x
                    typewrite.textContent = cur
                    r()
                }, 7);
            })
            
            await p.then(()=>{})
    }
};  _()


    
}, 500);


console.log("ye")
for (const [x, v] of Object.entries(document.getElementById("aboutholder").children))
{
v.addEventListener("mouseenter", function(){
    v.animate([{backgroundColor:"#343434", borderColor:"white"}], {duration:250, fill:"forwards"})
})
v.addEventListener("mouseleave", function(){
    v.animate([{backgroundColor:"rgb(24,24,24)", borderColor:"rgb(24,24,24)"}], {duration:250, fill:"forwards"})

})
}

const dnld = document.getElementsByClassName("download")[0]
dnld.addEventListener("mouseenter", ()=>{
dnld.animate([{borderColor:"white"}], {duration:250, fill:"forwards"})
})
dnld.addEventListener("mouseleave", ()=>{
    dnld.animate([{borderColor:"rgb(34,34,34)"}], {duration:250, fill:"forwards"})
    })

//basic af