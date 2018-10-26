export class validator{
    
    validarMatriz(valor: string){
       // console.log(valor.length);
       const numero = [
          " _ | ||_|", 
           "     |  |",
           " _  _||_ ",
           " _  _| _|",
           "   |_|  |",
           " _ |_  _|",
           " _ |_ |_|",
           " _   |  |",
           " _ |_||_|",
           " _ |_| _|",
       ]       
                
        if ( valor.length === 92) {
          const posicion = valor.split("\n");
        //  console.log(posicion);
          let valnum: string = "";
        

            for (let i = 0; i < 30 ; i = i+3) {

                const fila1 = posicion[0];
                const fila2 = posicion[1];
                const fila3 = posicion[2];

                const result = fila1.substr(i,3) + fila2.substr(i,3) + fila3.substr(i,3);

                //console.log(result);
                const num = numero.indexOf(result);

                console.log(num);

                //console.log(numero);
                if (num !== -1){
                    valnum = valnum + num;    
                }
                
            }
            return valnum;           
        }else{
            return false;
        }

    }

} 