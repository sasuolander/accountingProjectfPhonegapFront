// $("#information2").DataTable({
//        paging: false,
//        searching: false,
//          ajax:{
//              url:"http://localhost:8080/accounting/item/list_item",
//              dataSrc:""
//          },
//          
//          
//          columns:[
//                    {data: 'username'},
//                    {data: 'items.name'},
//                    {data: 'items.price'},
//                    //{'visible':false},
//                    {data: 'items.id'},
//                    //{'visible':false},
//                    {data: 'items.timestamp'},
//                    //{'visible':false},
//                    {data: 'user_id'}
//          ]
//      });  
//




//    $("#addItem2").submit(
//        function(){
//        var formdata = $(this).serializeArray();
//        
//         object ={};
//        $(formdata).each(function(i,field){
//            object[field.name]=field.value;
//        });
//        
//        console.log(object);
//        object= jsonObject(object.name,0,object.price,object.usernameid);
//        console.log(object);
//        
//        $.ajax({
//        url:'http://localhost:8080/accounting/item/add_item/',
//        type:'POST',
//        dataType: "json",
//        contentType: "application/json;",
//        processData: "true",
//        data: object,
//        success: function(json){
//        console.log(json);
//        }})
////        $.mobile.changePage("#MainList",{
////           transition: "fade",
////            reloadPage:"true",
////            
////        });
//        //event.preventDefault();
//    })



//var object = '{"items": [{"name":'+ d.data[0].name+',"id":'+0+',"timestamp":'+ d.data[0].timestamp+',"price":'+ //d.data[0].price+'}],"user_id":'+ d.data[0].user_id+'}';


// columns:[
//                    {data: 'items[]',
//                      render: function(data, type, row) {
//                        var value = "";
//                        data.forEach(function(row,items){
//                            $.each(items.item,function(row,item){
//                                value = item.name;
//                            });
//                        });
//                          console.log("testi");
//                        return value;
//                        }
//                    }, //name
//                    {data:  'items[]',
//                      render: function(data, type, row) {
//                        var value = "";
//                        data.forEach(function(items,item){
//                            $.each(items.item,function(row,item){
//                                value = item.price;
//                            });
//                        });
//                        return value;
//                      }
//                    }, //price
//                    {data: 'items[]',
//                       render: function(data, type, row) {
//                        var value = "";
//                         data.forEach(function(row,items){
//                            $.each(items.item,function(row,item){
//                                value = item.timestamp;
//                            });
//                        });
//                        return value;
//                        }
//                    }, //time
//                    {data: 'items[]',
//                       render: function(data, type, row) {
//                        var value = "";
//                        data.forEach(function(row,items){
//                            $.each(items.item,function(row,item){
//                                value = item.id;
//                            });
//                        });
//                        return value;
//                        }
//                    } // id
//                ]








//for (p=0;p<3;p++){
//                 
//            if(p===0){
//                
//                           
//
//            }else if (p=== 1){
//                         
//            }else if(p=== 2){
//  
//            }  
//             } 


//for (p=0;p<3;p++){
//                 $.each(header,function(i,title){
//             var headerRow = $("<tr/>");
//             headerRow.append($("<t"+(i == 0 ?  "h" : "d")+"/>").text(title));
//             headerRow.appendTo(tbody);
//                 });
//            if(p===0){
//                
//                            $.each(data, function(userKey,user){
//                var row = $("<tr/>");
//                row.append($("</td>").text(user.username));
//                 //console.log(user.username);
//                 $.each(user.items, function(ItemId,item){
//                      row.append($("</td>").text(item.name));
//                      row.append($("</td>").text(item.price));
//                      //console.log(item.name);
//                    //console.log(item.price);  
//                 });
//               row.appendTo(tbody);
//        }); 
//
//            }else if (p=== 1){
//                         $.each(data, function(userKey,user){
//                var row = $("<tr/>");
//                row.append($("</td>").text(user.username));
//                 //console.log(user.username);
//                 $.each(user.items, function(ItemId,item){
//                      row.append($("</td>").text(item.name));
//                      row.append($("</td>").text(item.price));
//                      //console.log(item.name);
//                    //console.log(item.price);  
//                 });
//               row.appendTo(tbody);
//        });     
//            }else if(p=== 2){
//                            $.each(data, function(userKey,user){
//                var row = $("<tr/>");
//                row.append($("</td>").text(user.username));
//                 //console.log(user.username);
//                 $.each(user.items, function(ItemId,item){
//                      row.append($("</td>").text(item.name));
//                      row.append($("</td>").text(item.price));
//                      //console.log(item.name);
//                    //console.log(item.price);  
//                 });
//               row.appendTo(tbody);
//        }); 
//  
//            }   
//        }


// var tbody = $("<table/>").attr("data-role","table");
//        tbody.addClass("ui-responsive table-stroke");
//        var header = ["Username","Name","Price"]

//$.each(header,function(i,title){
//             var headerRow = $("<tr/>");
//             headerRow.append($("<th/>").text(title));
//             headerRow.appendTo(tbody);
//                 
//        
//                 $.each(data, function(userKey,user){
//                     var row = $("<tr/>"),column;
//                        row.append("</td>").text(user.username);
//                         //console.log(user.username);
//                     console.log("outerloop"); 
//                         $.each(user.items, function(ItemId,item){
//                              row.append("<td>"+ item.name+"</td>");
//                              row.append("<td>"+item.price+"</td>");
//                              //console.log(item.name);
//                            console.log("innerloop"); 
//                             row.appendTo(tbody);
//                             
//                         });
//                       row.appendTo(tbody);
//                });
//           
//            });
//                tbody.appendTo("#datatable");