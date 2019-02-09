import axios from 'axios';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function userRegister(data){
    axios.post('/Register',data)
    .then(function(response)
    {
       
        console.log(response);
       
      //  this.props.props.history.push("/Login");
        

        window.location.href='/Login';
       // alert('Registered success..')

    })
    .catch(function(err)
    {
        console.log(err);
      //  alert("User with email id already exists!!")
        
    })
}

function userLogin(data){

    axios.post('/Login',data)
    .then(function(response)
    {
     
        console.log(response);
       //alert("Login Successfully!!");
         // this.props.props.history.push("/dashBoard");
          window.location.href='/dashBoard';

    })
    .catch(function(err)
    {
        console.log(err);
      //  alert("Login unsuccessful!!");
    });
}
export{
    userRegister,
    userLogin
}
