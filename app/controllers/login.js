// import Controller from '@ember/controller';

// export default Controller.extend({
//     actions: {
//         submitAction: function() {
//             var UserName = this.get('UserName');
//             var Password = this.get('Password');
//             var email = this.get('email');
            
//             this.set('UserName', UserName);
//             this.set('Password', Password);
//             this.set('email',email);
            
            
//             $.ajax({
//                 type: 'POST',
//                 url: "http://localhost:3008/login",
//                 dataType: 'json',
//                 data:{name:UserName,pass:Password,email:email} ,
//                 cache: false,
//                 success: function(result) {
//                 if(result){
//                     console.log(result)
//                    //alert(result)
//                 }
//                 else{
//                     alert("error");
//                 }
//                 }
//             });
        
 
//             this.transitionToRoute('gov-reg');
//         }
//       }
    
// });

import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        submitAction: function(){
           
            var email= this.get('email');
            var Password= this.get('Password');

            this.set('email', email);
            this.set('Password', Password);
           

            $.ajax({
                type: 'POST',
                url: "http://localhost:3000/login",
                dataType: 'json',
                data:{email:email,pass:Password} ,
                cache: false,
                success: function(result) {
                if(result){
                    console.log(result)
                }
                
                else{
                    alert("error");
                }
                }
            });
        
 
            this.transitionToRoute('result');
        }
      }
    
});
