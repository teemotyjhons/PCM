document.querySelector('.menu-bar').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show');
});

//ModalImg

document.querySelectorAll('.contenedor-modal img').forEach(el=>{
  el.addEventListener('click',function(ev) {
    this.parentNode.classList.add('activo');
      ev.stopPropagation();
  })
});

document.querySelectorAll('.contenedor-modal').forEach(el=>{
  el.addEventListener('click',function(ev) {
    this.classList.remove('activo');
  })
});
