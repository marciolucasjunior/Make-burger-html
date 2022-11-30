
let caixa1 = document.getElementById('caixa1');
let paos = document.getElementById('paos');
let carnes = document.getElementById('carnes');
let checkbox = document.querySelectorAll('.check');
let pegar = document.getElementById('pegar');
let pedido = [];
let p = document.createElement('p');


        
        pegar.addEventListener("click", function(e) {
        e.preventDefault();

        pedido.push(caixa1.value,paos.value,carnes.value);

        for(var i=0; i < checkbox.length;i++) {
        if(checkbox[i].checked) {
           pedido.push(checkbox[i].value)
        }
        };
       
        verificado.appendChild(p)
        p.innerHTML = 'Seu pedido foi feito com sucesso'
             
    });

    

    

  
   


     
 


     
