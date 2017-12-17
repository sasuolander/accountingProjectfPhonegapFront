var editorItem; 
function DATENOW(x){
var dateNow = new Date();
    dateNow = dateNow .getUTCFullYear() + '-' +
    ('00' + (dateNow.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + dateNow.getUTCDate()).slice(-2) + ' ' + 
    ('00' + dateNow.getUTCHours()).slice(-2) + ':' + 
    ('00' + dateNow.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + dateNow.getUTCSeconds()).slice(-2);
    console.log(dateNow);
    return dateNow;
}

function jsonObject (name,id,price,user_id){
    var timestamp = DATENOW();
    var object = {"items": [{"name": name,"id":0,"timestamp": timestamp,"price": parseFloat(price)}],"user_id": parseInt(user_id)};
    object =JSON.stringify(object);
    return object;}

function isJSON(data) {
   var ret = true;
   try {
      JSON.parse(data);
   }catch(e) {
      ret = false;
   }
   return ret;
}
var ajaxBasePOST = {
        dataSrc: "",
        type:'POST',
        dataType: "json",
        contentType: "application/json;",
        processData: "true",
        data:  function ( d ) {
          console.log(d);
            d =JSON.stringify(
            {"items":[
                {"name": d.data[0].name,"id":0,"timestamp":d.data[0].timestamp,"price":parseFloat(d.data[0].price)}
            ],"user_id": parseInt(d.data[0].user_id)});
          console.log(isJSON(d));
          console.log(d);
      },
        success: function(json){
        console.log(json);
    }
      
};

var number_of_user;
    $.get("http://localhost:8080/accounting/user/count",function(data){
        number_of_user = data;
        if(typeof number_of_user === 'string' || number_of_user instanceof String){
            number_of_user = parseInt(number_of_user);
        }  
    });

$(document).ready(function(){
    var editorItem = new $.fn.dataTable.Editor({
    table: "#information",
    idSrc:"id",
    ajax:{
        create: $.extend(true,{},ajaxBasePOST,{
            type:'POST',
            url:'http://localhost:8080/accounting/item/add_item/'
        }),
        remove:{
            type:'PUT',
            url:'http://localhost:8080/accounting/item/remove_item/_id_'
        }
    },       
    fields: [ 
        {label: "name:",
        name: "name"},
        {label: "price:",
        name: "price"},
        {label: "timestamp:",
        name: "timestamp",
        def: function () {return DATENOW();}, 
        type: "datetime"},
        {label: "usernameid:",
        name: "user_id"},
    ]
    });

    $("#UserTable").DataTable({
        paging: false,
        searching: false,
          ajax:{
              url:"http://localhost:8080/accounting/item/list_itemAll",
              dataSrc:""
          },
          
          columns:[
                {data: 'username'},
                {data: 'user_id'}
          ]
      });  
        
    $("#information").DataTable({
        dom: 'Bfrtip',
        paging:false,
        searching: false,
        ajax:{
          url:"http://localhost:8080/accounting/item/list_item",
          dataSrc:'',              
        },    
        "columns":[
                {data:'name'}, //name
                {data:'price'}, //price
                {data:'timestamp'}, //time
                {data:'id'} // id
          ],
        select: true,
        buttons: [
            { extend: "remove", editor: editorItem },
        ]
    });
    
    $(document.body).on('click', '#NewItemButton', function open(open) {
        var popupDivTag= document.getElementById("add_Item");
        popupDivTag.style.display ="initial";
    })
    
    $(document.body).on('click', '#exitNewItem', function close(close) {
     var popupDivTag= document.getElementById("add_Item");
        popupDivTag.style.display ="none";
    })
    
    $("#usernumber").append("<p id=UserNumber>"+number_of_user+"</p>");
    
    $("#addItem2").validate({
        
        
        rules:{
            name:{
               required:true, 
            },
            price:{
                required:true,
                min:0
            },
            usernameid:{
            required:true,
            range:[1,4]
            }
        },
        messages :{
            usernameid:{
            required:"User ID is needed.",
            range:"Give integer from 1 to "+parseInt($("#UserNumber").val())
            },
            name:{
               required:"Name is needed." 
            },
            price:{
                required:"Price is needed.",
                min:"Price can not be null."
            }
        },
        
//         submitHandler: function(form) {
//      form.submit(function(){
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
//        console.log(JSON.stringify(json));
//        }})
////        $.mobile.changePage("#MainList",{
////           transition: "fade",
////            reloadPage:"true",
////            
////        });
//        //event.preventDefault();
//    })
//         }
    });
    
    $("#addItem2").submit(
        function(){
        var formdata = $(this).serializeArray();
        
         object ={};
        $(formdata).each(function(i,field){
            object[field.name]=field.value;
        });
        
        console.log(object);
        object= jsonObject(object.name,0,object.price,object.usernameid);
        console.log(object);
        
        $.ajax({
        url:'http://localhost:8080/accounting/item/add_item/',
        type:'POST',
        dataType: "json",
        contentType: "application/json;",
        processData: "true",
        data: object,
        success: function(json){
        console.log(json);
        }})
//        $.mobile.changePage("#MainList",{
//           transition: "fade",
//            reloadPage:"true",
//            
//        });
        //event.preventDefault();
    })
});      
//https://plnkr.co/edit/g9eCs7oEeVvIGQhATRKk?p=preview