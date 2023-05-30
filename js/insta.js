$(function(){

        $.ajax({

          url: "./json/insta.json",

          dataType: "json",

          success : function(data){

            if(data.length>0){



              for(var i in data){
            
                $("#insta > .iconbox").eq(i).find("img").attr("src","img/"+data[i].instaurl);
                


              }
            }

          }

        })

      
      });