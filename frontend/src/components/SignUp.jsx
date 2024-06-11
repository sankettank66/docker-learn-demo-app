import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input type="text" {...register('firstName', { required: 'First name is required' })} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...register('lastName', { required: 'Last name is required' })} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register('email', { required: 'Email is required' })} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password', { required: 'Password is required' })} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Age</label>
          <input type="number" {...register('age', { required: 'Age is required' })} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
