import React, { useState } from 'react';
import './scriptadd';
const Contact = () => 
{

    const [user,setUser] =  useState({
        full_name : "",
        your_email : "",        
        phone : "",        
        message : "",        

    });
   let name,value ;
    const getData = (event) =>{
        name = event.target.name;
        value = event.target.value;
        setUser({...user,[name]:value});
     };

     const postData = async (e) => {
         e.preventDefault();
         const { full_name , your_email , phone , message,} = user;

         let EmailReg = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
         let pattern = new RegExp(/^[0-9\b]+$/);
         if( full_name &&  your_email && phone &&  message) {
            if(!EmailReg.test(your_email))
            {
                alert("please fill valid Email id."); 
                return false;
            }

            if( !pattern.phone && phone.length != '10')
            {
                alert("Please enter a valid mobile number");
                return false;
            }
            // store data in firebase 
            const response = await fetch(
                "https://reactcontactform-43dca-default-rtdb.firebaseio.com/reactcontactform.json", 
                {
                    method:"POST",
                    headers:{
                         "Content-Type":"application/json",
                         },
                         body: JSON.stringify({
                            full_name,
                            your_email,        
                            phone,        
                            message,
                         }),
                }
                 
                );   //await fetch end;
                // console.log(response);
                if(response)
                {
                    setUser({
                        full_name : "",
                        your_email : "",        
                        phone : "",        
                        message : "",
                    });
            
                  alert("Thanks for contacting us get in touch !");
                } else {
                  
                }
            // end firebase

         }  else {
            alert("please fill the form");

         }
        

     }; //postData fat array function end;
return(
<>
<body className="form-v8">
	<div className="page-content">
		<div className="form-v8-content">
			<div className="form-left">
				{/* <img src={'../imgs/form-v8.jpg'} alt="form img"/>  */}
			</div>
			<div className="form-right">
				<div className="tab">
					<div className="tab-inner">
						<button className="tablinks"  >Contact Us</button>
					</div>
				</div>
				<form className="form-detail"  method="POST" autoComplete="off">
					<div className="tabcontent" id="sign-up">
						<div className="form-row">
							<label className="form-row-inner">
								<input type="text" name="full_name" id="full_name" className="input-text" value={user.full_name} onChange ={getData} required/>
								<span className="label">Username</span>
		  						<span className="border"></span>
							</label>
						</div>
						<div className="form-row">
							<label className="form-row-inner">
								<input type="text" name="your_email" id="your_email" className="input-text" value={user.your_email} onChange ={getData} required/>
								<span className="label">E-Mail</span>
		  						<span className="border"></span>
							</label>
						</div>
						<div className="form-row">
							<label className="form-row-inner">
								<input type="text" name="phone" id="phone" className="input-text" value={user.phone} onChange ={getData} required/>
								<span className="label">Contact No</span>
								<span className="border"></span>
							</label>
						</div>
						<div className="form-row">
							<label className="form-row-inner">
								<input type="text" name="message" id="message" className="input-text" value={user.message} onChange ={getData} required/>
								<span className="label">Write Massage</span>
								<span className="border"></span>
							</label>
						</div>
						<div className="form-row-last">
							<input type="submit" name="Send" className="register" value="Send" onClick = {postData}/>
						</div>
					</div>
				</form>
				
			</div>
		</div>
	</div>

</body>

</>
);

};
export default Contact;