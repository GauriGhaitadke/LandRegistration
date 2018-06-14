import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        submitAction: function() {
            var UserName = this.get('UserName');
            var Password = this.get('Password');
            var email = this.get('email');
            var state = this.get('state');
            var District = this.get('District');
            var Rpassword = this.get('Rpassword');


            this.set('UserName', UserName);
            this.set('Password', Password);
            this.set('email',email);
            this.set('state', state);
            this.set('District', District);
            this.set('Rpassword',Rpassword);

            $.ajax({
                type: 'POST',
                url: "http://localhost:3000/Registration",
                dataType: 'json',
                data:{name:UserName,pass:Password,email:email,state:state,District:District,Rpassword:Rpassword} ,
                cache: false,
                success: function(result) {
                if(result){
                    console.log(result)
                  
                  
                    //alert(result)
                  
                    
                }else{
                    alert("error");
                }
                }
            });
        
 
            this.transitionToRoute('result');
        }
      }
    
});

