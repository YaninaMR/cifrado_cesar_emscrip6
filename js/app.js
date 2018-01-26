$(document).ready(() => {
  let caesar = (() => {
    let doStaff = (txt, desp) =>{
      let replace = (() => {
        let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
          'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let l = abc.length;
        return textinput => {
          let i = abc.indexOf(textinput.toLowerCase());
          if (i != -1) {
            let pos = i;
            pos += desp;
            pos -= (pos >= l) ? l:0;
            return abc[pos];
          }
          return textinput;
        };
      })();
				 let re = (/([a-z])/ig);
      return String(txt).replace(re, match => {
        return replace(match);
      });
    }; 
    return {
      encode: (txt, desp) => {
        return doStaff(txt, desp);
					   }
			        };
  })();

  function codificar() {
    let result = $('#result');
		    let chain = $('#chaintext').val();  
		    result.text(caesar.encode(chain, 7));
		 }

  let $button = $('.codifytext');
        
  $button.on('click', event => {
    event.preventDefault(); 
    codificar();
  		});
});