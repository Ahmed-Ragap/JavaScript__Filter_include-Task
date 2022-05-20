
const arrayNames = ['ahmed','ali','sara','asmaa','hala','a','b','c','d','khalil','syed','mona','d']

var inputText = document.querySelector('#inputText')
var inputSubmit= document.querySelector('#submit')
var resault = document.querySelector('.resault')
var loading = document.querySelector('.lod')

function find(){
    resault.innerHTML = ''
    
    var y = 0;
var int = setInterval(() => {
    y++

    loading.classList.add('loading'); 
    loading.innerHTML = 'loading...';
  
    if(y >= 3){
        loading.classList.remove('loading') 
        loading.innerHTML = ''
        clearInterval(int)
        var filt = arrayNames.filter(item => 
    
            item.includes(inputText.value)
        )
         for (var ele of filt) {
         var ready =  `
        <li>${ele} </li>
        
         `
         resault.innerHTML += ready

         //empty validation
         if( inputText.value == ''){
            resault.innerHTML = '"please enter a value "'
         }
      }
    } 
  },1000)
}


