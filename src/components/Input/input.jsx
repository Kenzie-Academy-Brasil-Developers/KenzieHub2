import { ForwardedRef, forwardRef } from "react";


export const Input = forwardRef(({ label, id, type, error, placeholder, ...rest}, ref) =>{
return (

    <div>
        <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            ref={ref}
            {...rest}
           
          />
          {error ? <p>{error}</p> : null}
    </div>
)



})