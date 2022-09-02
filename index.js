const formElement = document.querySelector('.form');

formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();

});

const inputElement = document.querySelector('.form__input');

inputElement.addEventListener('keyup', function() {
      const restrictSymbols=/['!','@','#','$','%','^','&','*','(',')']/;
      if (restrictSymbols.test(this.value))  {
            alert('Введены запрещенные символы'); 
            this.value = this.value.replace(restrictSymbols,'');
      }
})