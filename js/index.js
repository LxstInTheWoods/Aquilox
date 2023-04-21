const thing = document.getElementById("SSINTRO")

const divid_top = document.getElementById("divid_top")

const typewrite = document.getElementById("csttpwrt2")



thing.animate([{opacity:1}], {duration:500, fill:'forwards'})

setTimeout(() => {
    divid_top.animate([{width:"85%"}], {duration:250, fill:"forwards"})

    const str = "Bringing the game and the table."
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
//basic af