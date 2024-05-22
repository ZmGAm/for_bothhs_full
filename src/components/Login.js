// "use Client"
import React from 'react';
import { useContext,useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {TokenContext } from "./Context/TokenContext";
// import Axios  from 'axios';
// import { imageDb } from './config';
// import { object } from 'yup';
const Login = () => {
  // const navigate = useNavigate();
  const preset_key="cars-pics";
  const [errorforform,setErrorforfrom]=useState({});
  // const { AccessToken, setAccessToken } = useContext(Access);
  const {token,updateToken }=useContext(TokenContext);
  // const[gettoken,setGetToken]=token;
  const [isSubmit, setIsSubmit] = useState(false);
  const [image, setImage] = useState();
  // const [cdata, setCdata] = useState(null);
  const [cdata, setCdata] = useState('');
    const [userRegistration,setUserRegistration]=useState({
        username:"",
        password:"",
    });
    // const posts_data="https://65db334b3ea883a152914d9b.mockapi.io/create-pools";
    // const posts_data="https://car-pooling-761a7-default-rtdb.firebaseio.com/car-poolingfrom.json";
    // const posts_data="https://65db334b3ea883a152914d9b.mockapi.io/create-pools";
    // const posts_data="https://console.firebase.google.com/project/car-pooling-761a7/database/car-pooling-761a7-default-rtdb/data";
    // const posts_data="https://localhost:27017/car_pooling/user";
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
    // const submmit =(e)=>{
    //     e.preventDefault();
    //     const newRecord={...userRegistration,id: new Date().getTime().toString()};
    //     // const picture={...image,id: new Date().getTime().toString()};
       
    //     // console.log(records);
    //     // setRecords({...records,newRecord});
    //     setError(validate(userRegistration))
        
    //     setIsSubmit(true);
    //     console.log(newRecord);
        
    //     // console.log(picture);
        
        
    //     // setUserRegistration({username:"",email:"",phone:"",password:""});
    //     // const dataArray = records.data || [];
    //     // const formData =new FormData();
    //     // formData.append('file',filen);
    //     // formData.append('upload_preset',preset_key);
    //     // Axios.post("https://car-pooling-761a7-default-rtdb.firebaseio.com/car-poolingfrom.json",newRecord)
    //     // .then(res=>setImage(res.data.secure_url))
    //     // .then(res=>console.log(res.data))
    //     // .catch(err=>console.log(err))
    //     try {
    //       // Make an API request to post form data
    //       const response =  Axios.post(posts_data,  newRecord);
          
    //       if (response.status === 201) {
    //         console.log('Data submitted successfully:', response.data);
    //         // Handle success (e.g., show a success message)
    //       } else {
    //         console.error('API request failed:', response.status);
    //         // Handle error (e.g., show an error message)
    //       }
    //     } catch (error) {
    //       console.error('Error during API request:', error);
    //       // Handle error (e.g., show an error message)
    //     }
    //   };
      
      // const postimage=async(picture)=>{
      //     const tasveer =new FormData();
      //     tasveer.append("file",image);
      //     tasveer.append("upload_preset","cars-pics");
      //     // tasveer.append("cloud_name","dogabixdo");
      //     const result =await Axios.post("https://api.cloudinary.com/v1_1//dogabixdo/image/upload",tasveer)
      //     .then(res=>console.log(res))
      //     .catch(err=>console.log(err));
      //     // console.log("use tasveer" ,result.tasveer);
      //     // console.log("use tasveer" ,result.tasveer);
        
      //     // setData(result.ima);


      //   }
      //   useEffect(()=>{
        
      //     postimage();

      //   },[]);
       
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
            
            updateToken(data.token);
            setCdata(data)
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
            <form  class="row g-3"action="" onSubmit={submmit} > 
                <div class="mb-3">
                        <label htmlFor="username">Fullname</label>
                        <input type="username" value={userRegistration.username}
                        onChange={inputvalid}
                        autoComplete='off' name="username" id="username" />
                        <p1 className="formerrors">{errorforform.username}</p1>
                </div>
                <div class="mb-3">
                        <label htmlFor="password" class="form-label" >Password</label>
                        <input type="password" value={userRegistration.password}
                        onChange={inputvalid}
                         autoComplete='off'name="password" id="password" />
                        <p1 className="formerrors">{errorforform.password}</p1>
                </div>
                
                {/* <button>submmit</button> */}
                <button type="submmit" class="btn btn-primary">submmit</button>
            </form>
            <div>
                {
                    
                    // data.map((curElem)=>{
                    //     const {id,username,email,phone,password}=curElem;
                    //     return( 
                            
                    //         <div>
                    //             <p>{username}</p>
                    //             <p>{email}</p>
                    //             <p>{phone}</p>
                    //             <p>{password}</p>
                    //         </div>
                    //     )
                    // })
                }
                <p>user {cdata.message}</p>
                {/* <p>token {token}</p> */}
                <p>type {cdata.type}</p>
            </div>

</>
      
};
  
export default Login;