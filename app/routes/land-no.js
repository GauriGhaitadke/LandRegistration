import Route from '@ember/routing/route';

  

    export default Route.extend({
       model(){
           var UserName = this.controllerFor("firstproperty").get("UserName");
   
           var email= this.controllerFor("firstproperty").get("email");
    
           this.controllerFor("land-no").set("UserName", UserName);
     
           this.controllerFor("land-no").set("email",email);
       }


});