import React from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading || gLoading) {
    return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = data => {
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password);
    }

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

          <div class="form-control w-full max-w-xs">
             <label class="label">
               <span class="label-text">Email</span>
            </label>
               <input
                type="email" 
                placeholder="Your Email" 
                class="input input-bordered w-full max-w-xs" 
                {...register("email", {
                    required: {
                    value:true,
                    message: 'Email is required'
                    },
                     pattern: {
                     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'provied a valied email',
                      }
                      })}
                      />
                <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                 </label>
            </div>
          <div class="form-control w-full max-w-xs">
             <label class="label">
               <span class="label-text">password</span>
            </label>
               <input
                type="password" 
                placeholder="password" 
                class="input input-bordered w-full max-w-xs" 
                {...register("password", {
                    required: {
                    value:true,
                    message: 'password is required'
                    },
                    minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                      }
                      })}
                      />
                <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                 </label>
            </div>
                
            {signInError}
              <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
          </form>
          <p><small>New to PARTS MANUFACTURER <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
            >Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
