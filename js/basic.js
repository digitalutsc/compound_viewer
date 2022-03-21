metadata=document.getElementsByClassName("metadata-row");
for (el of metadata){
    el.style="display: flex; flex-direction: column; align-items: right";
    for (row of el.children){
        if(row.children[1].innerText==""){
            row.innerHTML="";
        }
    }
    for (row of el.children){
        if(row.innerHTML!=""){
            row.style="display: flex; flex-direction: row; justify-content: space-around";
            row.children[0].style.paddingBottom="15px";
            row.children[1].style="width:70%";
            row.children[0].style.width="30%";
            row.children[0].style.fontWeight="bold";
            row.children[0].style.paddingRight="15%"
            row.children[0].innerText+= ": ";
        }
    }
}
