 if (typeof (Logikbox) === 'undefined' || Logikbox === null) {
        Logikbox = {};
    }
    if (typeof (Logikbox.Foo) === 'undefined' || Logikbox.Foo === null) {
        Logikbox.Foo = {};
    }
    (function (rootNamespace, $) {
        //namesaoce code here
        
        this.go = function(e) {
                return e + ": here";
                 
            };
        this.alertme = function(e){
            alert(e);
            };
        
        
        $(document).ready(function(){
            
            console.log("in namespoace");
             
        });
        
        //list of methods to map
        rootNamespace.alertme = this.alertme;
        rootNamespace.go = this.go; 
    })(Logikbox.Foo, jQuery);
    
    console.log("xxx");
    
    console.log(Logikbox.Foo);
    console.log(Logikbox.Foo.go("hello world"));
    
/    //Logikbox.Foo.alertme("hello zell");