{
    let janInput = document.getElementById('january');
    let febInput = document.getElementById('febuary');
    let marchInput = document.getElementById('march');
    let aprailInput = document.getElementById('aprail');
    let mayInput = document.getElementById('may');
    let junInput = document.getElementById('jun');
    let julyInput = document.getElementById('july');
    let agustInput = document.getElementById('agust');
    let semInput = document.getElementById('september');
    let octInput  = document.getElementById('october');
    let novInput = document.getElementById('november');
    let decInput = document.getElementById('december')
    janInput.addEventListener('input',(event)=>{
        // getInputValues(Number(event.target.value))
        console.log(event.target.value)

    });
    febInput.addEventListener('input',(event)=>{
        console.log(event.target.value)

    });
    marchInput.addEventListener('input',(event)=>{
        console.log(event.target.value)

    });
    aprailInput.addEventListener('input',(event)=>{
        console.log(event.target.value)

    });
    mayInput.addEventListener('input',(event)=>{
        console.log(event.target.value)

    });
    junInput.addEventListener('input',(event)=>{
        console.log(event.target.value)

    });
    julyInput.addEventListener('input',(event)=>{
        console.log(event.target.value)

    });
    agustInput.addEventListener('input',(event)=>{
        console.log(event.target.value)

    });
    semInput.addEventListener('input',(event)=>{
        console.log(event.target.value)

    });
    octInput.addEventListener('input',(event)=>{
        console.log(event.target.value)
    });
    novInput.addEventListener('input',(event)=>{
        console.log(event.target.value)

    });
    decInput.addEventListener('input',(event)=>{
        console.log(event.target.value)
    })
}
const getInputValues =(val)=>{
    console.log(typeof(val))

    
}