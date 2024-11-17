
    let p = document.querySelectorAll('p');
        window.addEventListener('load', () => {
            p.forEach(element =>{
                let num = element.textContent
                let i = 0;
                let timer = setInterval(() => {
                    if(i > num){
                        clearInterval(timer);
                         
                    }else{
                        element.textContent = i;
                        i++;
                    }
                }, 100);
            })
        });

