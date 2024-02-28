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
    let decInput = document.getElementById('december');

    
    
    janInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-1');
        let janLeaves = document.getElementById('jan-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry '
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                janLeaves.value = 1.5;
                grandLeaves(1.5,'January')

            }else{
                janLeaves.value = '';
            }
        }
        

    });
    febInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-2');
        let febLeaves = document.getElementById('feb-leaves');
        if(Number(event.target.value) > 26 ){
            err.innerText = 'Invalid entry'
        }else{
            err.innerText = '';
            if(Number(event.target.value)=== 26){
                febLeaves.value = 1.5;
                grandLeaves(1.5,'Febuary')
            }else{
                febLeaves.value = '';
            }
        }
        

    });
    marchInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-3');
        let marchLeaves = document.getElementById('march-leaves')
        if(Number(event.target.value > 26)){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                marchLeaves.value = 1.5;
                grandLeaves()

            }else{
                marchLeaves.value = ''
            }
        }


    });
    aprailInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-4');
        let aprailLeaves = document.getElementById('aprail-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                aprailLeaves.value = 1.5;
                grandLeaves();
            }else{
                aprailLeaves.value = '';
            }
        }

    });
    mayInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-5');
        let mayLeaves = document.getElementById('may-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                mayLeaves.value = 1.5;
                grandLeaves();
            }else{
                mayLeaves.value = '';
            }
        }

    });
    junInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-6');
        let junLeaves = document.getElementById('jun-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                junLeaves.value = 1.5;
                grandLeaves();
            }else{
                junLeaves.value = '';
            }
        }

    });
    julyInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-7');
        let julyLeaves = document.getElementById('july-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                julyLeaves.value = 1.5;
                grandLeaves();
            }else{
                julyLeaves.value = '';
            }
        }

    });
    agustInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-8');
        let agustLeaves = document.getElementById('agust-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                agustLeaves.value = 1.5;
                grandLeaves();
            }else{
                agustLeaves.value = '';
            }
        }

    });
    semInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-9');
        let septemberLeaves = document.getElementById('september-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                septemberLeaves.value = 1.5;
                grandLeaves();
            }else{
                septemberLeaves.value = '';
            }
        }

    });
    octInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-10');
        let octoberLeaves = document.getElementById('october-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                octoberLeaves.value = 1.5;
                grandLeaves();
            }else{
                octoberLeaves.value = '';
            }
        }
    });
    novInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-11');
        let novemberLeaves = document.getElementById('november-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                novemberLeaves.value = 1.5;
                grandLeaves();
            }else{
                novemberLeaves.value = '';
            }
        }

    });
    decInput.addEventListener('input',(event)=>{
        let err = document.getElementById('err-12');
        let decemberLeaves = document.getElementById('december-leaves');
        if(Number(event.target.value) > 26){
            err.innerText = 'Invalid entry';
        }else{
            err.innerText = '';
            if(Number(event.target.value) === 26){
                decemberLeaves.value = 1.5;
                grandLeaves();
            }else{
                decemberLeaves.value = '';
            }
        }
    })
}

const grandLeaves = (val,month)=>{
    let grandTotal = 0
    let leavesInputs = document.getElementsByClassName('leaves-input');
    for(let i = 0; i < leavesInputs.length; i++){
        grandTotal += Number(leavesInputs[i].value);
        
      

    }
    getValues(grandTotal);

    


    
}

const getValues = (val) =>{
    let grand_leaves = document.getElementById('grand-leaves');
    grand_leaves.value = val

}