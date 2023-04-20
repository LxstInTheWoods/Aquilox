const images = [
    document.getElementById("0"),
    document.getElementById("1"),
    document.getElementById("2")
]
const image = document.getElementById("IMGG")
var current = 0


//move in                             images[parseInt(v)].animate([{right:"0%"}], {duration:1500, fill:"forwards"})

async function Set(){
    for (const [v, x] of Object.entries(images))
    {

        const p = new Promise((Resolve) =>{
                //moves the image into frame
                x.style.display = "block"

            async function _RR()
            {   
                //move the next one into the frame
                const _p = new Promise((_R) => {
                        console.log(images.length - 1, parseInt(v))
                        if (parseInt(v) === images.length - 1)
                        {
                            console.log(images[parseInt(v)])
                            images[parseInt(v)  ].animate([{right:"0%"}], {duration:1500, fill:"forwards"})
                            console.log(images[parseInt(v)])


                        }
                        else
                        {
                            images[parseInt(v) + 1 ].animate([{right:"1000%"}], {duration:1500, fill:"forwards"})
                            console.log(images[parseInt(v)])

                        }
                        setTimeout(() => {
                            _R()
                        }, 2000);


                })
                
                //moves the previous out of the frame
                await _p.then((ONf)=>{  

                           // x.animate([{right:"1000%"}], {duration:1500, fill:"forwards"})
                            setTimeout(() => {
                                Resolve()
                            },1800 );

                 } )
        }
        _RR()
        })
        await p.then((F)=>{})
    }
    Set()
}

Set()   