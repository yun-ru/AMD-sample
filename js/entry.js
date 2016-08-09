require(["js/config"],function(){
    require(["a","b","jquery"],function(a,b,$){
        console.log(b);
        console.log(a.name);
        a.sayhi();
        $("h3").html("NEW DATA")
    })
});