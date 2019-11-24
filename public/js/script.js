if (window.innerWidth <= 575.98) {
 document.addEventListener('DOMContentLoaded', () => {
  if (document.location.pathname == '/services') {
   // alert(document.location.pathname)
       let arr=[];
       
       let iconName=[];
   const el = document.querySelectorAll('.row').forEach(el => {
    // console.log(el);
    let obj = Array.from(el.children);

    obj.forEach(el => {
     if (el.classList.contains('col-md-3') || el.classList.contains('col-sm-5')) {

      if (!el.parentElement.classList.contains('mx-auto')) {
       el.classList.remove('col-md-3');
       el.classList.remove('col-sm-5');
       // 
       let classNames = el.firstElementChild.children[1].className;
        iconName.push(el.firstElementChild.firstElementChild);
       let ne = classNames.split(' ');
        arr.push(ne[1]);
      }
     }
    });
    
    el.classList.remove('row');

   });
   iconName.forEach(name=>{
    arr.forEach(clas =>{
     name.nextElementSibling.classList.remove(clas);
    })
    console.log(name.nextElementSibling)
   })
   console.log(iconName);
  console.log('array:', arr)
  }

 })
}