$(function(){

        $.ajax({

          url: "./json/sale.json",

          dataType: "json",

          success : function(data){

            if(data.length>0){



              for(var i in data){
            

                $("#sale > .box").eq(i).find("img").eq(0).attr("src", "img/"+data[i].url); 

                $("#sale > .box").eq(i).find("h3").children().text(data[i].title);    

                $("#sale >.box").eq(i).find("p:first").children().text(data[i].subtitle);

                $("#sale >.box").eq(i).find("span").text(data[i].subprice);

                $("#sale > .box").eq(i).find("h6").text(data[i].price);

                $("#sale >.box").eq(i).find("img").filter("#dawn").attr("src","img/"+data[i].dawnurl);

                $("#sale >.box").eq(i).find("img").filter("#sale_button").attr("src","img/"+data[i].saleurl);

                $("#sale >.box").eq(i).find("p").filter("#percent").text(data[i].percent);

                


              }
            }

          }

        })

      
      });