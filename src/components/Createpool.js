// "use Client"
import React from 'react';
import { useContext,useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {TokenContext } from "./Context/TokenContext";
import { TypeContext } from './Context/TypeContext';
import Locationsearch from './Locationsearch';
import GoogleMapNew from './GoogleMapNew';
import car from"./design/images/HD-wallpaper-suzuki-swift-2017-glx-turbo-new-red-swift-h_002.jpg"
// import{TypeContext}from "./Context/TypeContext";
import "./design/signup.css"
const Login = () => {
  // const navigate = useNavigate();
  const preset_key="cars-pics";
  const [errorforform,setErrorforfrom]=useState({});
  
  const {token,updateToken }=useContext(TokenContext); 
  const {type,updateType }=useContext(TypeContext); 
  const [isSubmit, setIsSubmit] = useState(trueA);
  const [image, setImage] = useState();
  // const [cdata, setCdata] = useState(null);
  const [cdata, setCdata] = useState('');
    const [userRegistration,setUserRegistration]=useState({
        username:"",
        password:"",
    });
    const posts_data="http://localhost:5000/user/login";
    const posts_pic="https://api.cloudinary.com/v1_1//dogabixdo/image/upload";
    
    // const [records,setRecords] =useState ([]); 
    const inputvalid= (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        // const file=e.target.files[0];
        // console.log(name,value);

        // setUserRegistration({...userRegistration,[name]:value});
        if (userRegistration) {
          setUserRegistration({ ...userRegistration, [name]: value });
          // setFilen(file);
        } else {
          console.error("userRegistration is null"); // Handle the case where userRegistration is not yet initialized
        }
        // setImage({...image,[name]:value});
        //  setFilen(file);
    }

       
      const submmit = async (e) => {
        e.preventDefault();
        // const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
      
        // Validate user input (assuming you have a validate function)
        setErrorforfrom(validate(userRegistration));
        setIsSubmit(true);
            
      
        
      };
    
     const chechk_data= async (e)=> {

        
          // Make an API request to post form data
          // const response = await Axios.post(posts_data, newRecord);
          try{
          const response = await fetch(posts_data,{
            method:'POST',
            body:JSON.stringify(userRegistration),
            headers:{
              'Content-Type':'application/json'
            }
          });
          const data= await response.json();
     
          if(data){
            
            setCdata(data)
            updateToken(data.token);
            updateType(data.type);
            // updateType(data.type);
            // console.log("response ",setCoin.code);
            // console.log("response 2 ",data.code);
            console.log("data ",data);
            // console.log("cdata ",cdata);
            // console.log("coin ",coin);
            // console.log("type ",typeof setCoin); 
            // console.log("token",data.token);
            // localStorage.setItem('token', data.token)
            // localStorage.setItem('token', data.token)
            // console.log("data tokrn  ",setCoin.token);
            // console.log("Accesstoken ",data.token);
            console.log("Accesstoken ",{token});
           
          }
      
          if (response.status === 200) {
            console.log('in fornt Data submitted successfully:',response.status ) //response);
            // Handle success (e.g., show a success message)
          } else {
            console.error('API request failed:', response.status);
            // Handle error (e.g., show an error message)
          }
        
       } catch (error) {
          console.error('Error during API request:', error);
          // Handle error (e.g., show an error message)
        }
      }
      // console.log("token in login ",token);
      useEffect(()=>{
        localStorage.setItem('token',JSON.stringify(token));
      },[token])
      useEffect(()=>{
          
        // console.log("errorforform",errorforform);
        if(Object.keys(errorforform).length===0 && isSubmit){
          // console.log("user",userRegistration);
          chechk_data();
          
        }
      },[errorforform]);
      const validate = (values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Username is required!";
          }
          
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
          } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
          }
          return errors;
        };

    
    return <> 
    <div className='create' style={{
       display: "flex",
       flexDirection: "row",
       height:"200px",
       marginTop:"10PX"

    }}>
    <div className='Container' style={{  display:"flex",alignItems: "center",justifyContent:"center", width: "100hv",
  height: "900PX"}}>
            <div className='farm' >
              {
                isSubmit&&(
                  <form  className="form" action="" onSubmit={submmit} > 
                                <h1 style={{width:"100px",height:"30px",justifyContent:"center",fontWeight:"bolder"}}> Create pool</h1>
                              <div className="form-group" >
                              <label htmlFor="destination">destination</label>
                                  <input type="destination" value={userRegistration.username}Placeholder='Pickup Location'/>
                              </div>
                              <div className="form-group" >
                              <label htmlFor="source">source</label>
                                  <input type="source" value={userRegistration.username}Placeholder='DropOff Location'/>
                                  
                              </div>
                              <div className="form-group" >
                              <label htmlFor="name">Name</label>
                                  <input type="name" value={userRegistration.username}Placeholder='Enter Vehicle name'/>
                                  
                              </div>
                              <div className="form-group" >
                              <label htmlFor="Model">Model</label>
                                  <input type="Model" value={userRegistration.username}Placeholder='Enter Vehicle  Model'/>
                                  
                              </div>
                              <div className="form-group" >
                              <label htmlFor="seats">No Of saets</label>
                                  <input type="seats" value={userRegistration.username}Placeholder='Enter No Of saets'/>
                                  
                              </div>
                              <div className="form-group" >
                              <label htmlFor="tranmissionicon">Tranmissionicon</label>
                                  <input type="tranmissionicon" value={userRegistration.username}Placeholder='Enter vehicle tranmissionicon'/>
                                  
                              </div>
                              <div className="form-group" >
                              <label htmlFor="Rent">Rent</label>
                                  <input type="Rent" value={userRegistration.username}Placeholder='Enter vehicle Rent'/>
                                  
                              </div>
                              <div className="form-group" >
                              <label htmlFor="name">Time</label>
                                  <input type="name" value={userRegistration.username}Placeholder='Enter waiting time'/>
                                  
                              </div>
                              {/* <button>submmit</button> */}
                              <button type="submmit" class="btn btn-primary">submmit</button>
                            

                              
                              <div style={{display:"flex",flexDirection:"column",rowGap:"45px"}}>
                              <h1 style={{width:"100px",height:"30px",justifyContent:"center",fontWeight:"bolder"}}> OR Add existing vehicle </h1>
                              <button type="submmit" class="btn btn-primary">ADD</button>
                              </div>
                              <p>{cdata.message}</p>
                          </form>


                  
                )
              }
              {/* {
                !isSubmit&&(
                       <form  className="form" action="" onSubmit={submmit} > 
                                <h1 style={{width:"100px",height:"30px",justifyContent:"center",fontWeight:"bolder"}}> view detail  </h1>
                                
                              <div className="form-group" >
                                <div style={{width:"300px",height:"450px" ,borderColor:"3px solid blue"}} >
                                image
                                <image src='../design/images/gmain.jpg' />
                                </div>
                                
                                 <h4>Pool Creater Zoahib</h4>
                                 <h4> Toyota Land Cruiser  </h4>
                                  <h5>Model 2018</h5> 
                                  <h5>Remaining seats 4</h5>
                                  <h5>Remaining Time 5 sec</h5>
                                  <h5>Rent/km 400 </h5>
                                  <h5>source  Umt</h5>
                                  <h5>destination Joher Town</h5>
                              </div>
                              
                          </form>


                  
                )
              } */}

              {/* {
                !isSubmit&&(
                       <form  className="form" action="" onSubmit={submmit} > 
                                <h1 style={{width:"100px",height:"30px",justifyContent:"center",fontWeight:"bolder"}}> view detail  </h1>
                                
                              <div className="form-group" >
                                <div style={{width:"300px",height:"450px" ,borderColor:"3px solid blue"}} >
                                image
                                <image src='../design/images/gmain.jpg' />
                                </div>
                                
                                 <h4>Pool Creater Zoahib</h4>
                                 <h4> Toyota Land Cruiser  </h4>
                                  <h5>Model 2018</h5> 
                                  <h5>Remaining seats 2</h5>
                                  <h5>Departure Time 5 sec</h5>
                                  <h5>payment 100 </h5>
                                  <h5>payment method jazz cash</h5>
                                  <h5>source  Umt</h5>
                                  <h5>destination Joher Town</h5>
                              </div>
                              <button type="submmit" class="btn btn-primary">Cancel Ride</button>
                          </form>


                  
                )
              } */}
                          
                          
                         
                    </div>

            </div>
            <GoogleMapNew/>
    </div>
  
    

</>
      
};
  
export default Login;