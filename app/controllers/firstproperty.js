import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        submitAction: function() {
            var UserName = this.get('UserName');
            var email = this.get('email');
            var No = this.get('No');
            var AdharNo = this.get('AdharNo');
            var addr = this.get('addr');

           
            this.set('UserName', UserName);
  
            this.set('email',email);
            this.set('No', No);
            this.set('AdharNo',AdharNo);
            this.set('addr',addr);
            $.ajax({
                type: 'POST',
                url: "http://localhost:3005/login",
                dataType: 'json',
                data:{name:UserName,pass:Password,email:email} ,
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
        
      this.transitionToRoute('land-no');
 
        }
      }
    
});

