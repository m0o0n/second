var content = document.getElementsByClassName("pc");
var id_cont = document.getElementById("product_container");
        
                id_cont.addEventListener('mouseover', function(e){
                    var t = e.target;
                    if(t.id = "pc"){
                      //  console.log(t.parentElement);
                        
                        var pre_curent = t.parentElement;
                        if(pre_curent.className != "content" && pre_curent.className !="pc_share" && pre_curent.className !="pc_hover_icon" && pre_curent.className != ""){
                            var curent = pre_curent;
                        }
                        console.log(curent.offsetTop);
                        
                        t.onmouseover = function(){
                            var rect = curent.getBoundingClientRect();
                            curent.classList.add("active_pc");
                            window.scrollTo({
                                top: offset-45,
                                behavior: "smooth"
                            });
                        }
                        
                        t.onmouseout = function(){curent.classList.remove("active_pc");}
                        
                        
                        var rect = curent.getBoundingClientRect();
                        console.log(rect.top);
                        var bodyRect = document.body.getBoundingClientRect(),
    elemRect = curent.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;


                        
                    }
                })

