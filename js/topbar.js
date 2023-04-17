const topbar = document.getElementById("topbar")

for(const x of topbar.getElementsByTagName("a"))
{

    x.addEventListener("mouseenter", () =>{
        x.animate([{color:"white"}], {duration:150, fill:"forwards"})
    })

    x.addEventListener("mouseleave", () =>{
        x.animate([{color:"#666666"}], {duration:150, fill:"forwards"})
    })
}
