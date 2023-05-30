$(function(){

        $.ajax({

          url: "./json/tema1.json",

          dataType: "json",

          success : function(data){

            if(data.length>0){



              for(var i in data){
            

                $("#tema > .box > .product_box").eq(i).find("img").eq(0).attr("src", "img/"+data[i].url); 

                $("#tema > .box > .product_box").eq(i).find("h4").text(data[i].title);    

                $("#tema >.box > .product_box").eq(i).find("span").text(data[i].price);

                $("#tema > .box > .product_box").eq(i).find("p").text(data[i].subprice);

                $("#tema >.box > .product_box").eq(i).find("img").filter("#dawn").attr("src","img/"+data[i].dawnurl);

    
              }
            }

          }

        })

      
      });