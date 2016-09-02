(function(XHR) {
  const obj={
    div:document.createElement('div'),
    show:false,
    st:false,
  }
  obj.div.style.position='fixed';
  obj.div.style.width='0%';
  obj.div.style.height='2px';
  obj.div.style.top=0;
  obj.div.style.left=0;
  obj.div.style.borderRadius='1px';
  obj.div.style.zIndex='9999';
  obj.div.style.backgroundColor='#2A89FF';
  obj.div.style.display='none';
  obj.div.style.transition='width .5s ease-out';
  document.body.appendChild(obj.div)
  const Loader={
    onloadstart(e){
      if(!obj.show){
        obj.st && clearTimeout(obj.st);
        obj.div.style.display='block';
        obj.show=true;
        setTimeout(() => {
          obj.div.style.width='90%';
        });
      }
    },
    onloadend(e){
      if(obj.show){
        obj.div.style.width='100%';
        obj.st=setTimeout(() => {
          obj.div.style.display='none';
          obj.div.style.width='0%';
          obj.show=false;
        }, 500);
      }
    }
  }
  window.XMLHttpRequest=function(...props) {
    const xhr=new XHR(...props)
    return Object.assign(xhr, Loader);
  }
}(XMLHttpRequest))
