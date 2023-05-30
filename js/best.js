$(function(){

        $.ajax({

          url: "./json/best.json",

          dataType: "json",

          success : function(data){

            if(data.length>0){



              for(var i in data){
            

                $("#best > .box").eq(i).find("img").eq(0).attr("src", "img/"+data[i].url); 

                $("#best > .box").eq(i).find("h3").children().text(data[i].title);    

                
                $("#best >.box").eq(i).find("span").text(data[i].subprice);

                $("#best > .box").eq(i).find("h6").text(data[i].price);

                $("#best > .box").eq(i).find("h6").filter(".text_box2").text(data[i].price);

                $("#best >.box").eq(i).find("img").filter("#dawn").attr("src","img/"+data[i].dawnurl);

                $("#best >.box").eq(i).find("p").filter("#percent").text(data[i].percent);

                


              }
            }

          }

        })

      
      });