
      $(function(){

        //MD픽

        $.ajax({

          url: "./json/MD_pick.json",

          dataType: "json",

          success : function(data){

            if(data.length>0){



              for(var i in data){
            

                $("#md > .box").eq(i).find("img").eq(0).attr("src", "img/"+data[i].url); 

                $("#md > .box").eq(i).find("h3").children().text(data[i].title);    

                $("#md >.box").eq(i).find("p:first").children().text(data[i].subtitle);

                $("#md >.box").eq(i).find("span").text(data[i].subprice);



                $("#md > .box").eq(i).find("div").filter(".style01").children("h6").text(data[i].price);
                $("#md > .box").eq(i).find("div").filter(".style1").children("h6").text(data[i].price);


                $("#md >.box").eq(i).find("img").filter("#free").attr("src","img/"+data[i].freeurl);

                $("#md >.box").eq(i).find("img").filter("#hot").attr("src","img/"+data[i].besturl);

                $("#md >.box").eq(i).find(".style1").children("#dawn").attr("src","img/"+data[i].dawnurl);
                
                $("#md >.box").eq(i).find("p").filter("#percent").text(data[i].percent);

                


              }
            }

          }

        })

      
      });
