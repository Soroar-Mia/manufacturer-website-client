import React from 'react';
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [token] = useToken(user || gUser);

      const navigate = useNavigate();
  
    let signInError;
  
    if (loading || gLoading || updating) {
      return <Loading></Loading>
      }
  
      if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }
  
    if (token) {
      navigate('/');
  }
  
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
      //  navigate('/Parts');
    }
    return (
        <div className="flex h-screen justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
  
            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
            </div>



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
                <input className='btn w-full max-w-xs text-white' type="submit" value="Signup" />
            </form>
            <p><small>Already have an account? <Link className='text-primary' to="/login">Please login</Link></small></p>
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

export default SignUp;