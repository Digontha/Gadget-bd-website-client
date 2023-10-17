
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value     
        const password = e.target.password.value  
        console.log(email, password);
   
 }


   return (
    <>
       <div className='flex flex-col justify-center items-center mt-10 lg:h-[70vh]'>
           <h1 className="text-2xl font-semibold py-3">Login</h1>
             <div className="card w-full max-w-sm shadow-2xl bg-base-100">
           <form onSubmit={handleLogin} className="card-body">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input type="email" placeholder="email" name="email" className="input input-bordered" required />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Password</span>
               </label>
               <input type="password" placeholder="password" name="password" className="input input-bordered" required />
               
             </div>
             <div className="form-control mt-6">
               <button className="btn btn-primary">Login</button>
             </div>
           </form>
           <Link className="text-center" to="/register"><p>Haven't any account? <span className="font-bold btn btn-link">register</span></p></Link>
           <div className="p-5">
           <button className="btn btn-sm btn-neutral w-full"><FcGoogle></FcGoogle> Google</button>
           </div>
         </div>
       </div>
    
    </>
      
   );
};

export default Login;