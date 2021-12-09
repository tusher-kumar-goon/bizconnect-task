import React from 'react';
import contact from '../../../images/contact.png'
import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {
    const { register} = useForm();
    return (
        <div className="row container-fluid mb-5">
            <div className="col-md-6 col-sm-12">
                
                  <img className="contact-image" src={contact} alt=""/>

            </div>

            <div className="col-md-6 col-sm-12 ">
             <div className='add-product'>
              <div class="input-group ">
                <form>
                <input   {...register("name", { required: true, maxLength: 20 })}
                    placeholder='Name' />
                
                <input type="number" {...register("price", { required: true, min: 1, max: 5 })} placeholder="Email" />
                <input type="number" {...register("price", { required: true, min: 1, max: 5 })} placeholder="Contact" />
                <input type="number" {...register("price", { required: true, min: 1, max: 5 })} placeholder="Company" />
                <input type="number" {...register("price", { required: true, min: 1, max: 5 })} placeholder="City" />
                <textarea style={{height:250}} {...register("description")} placeholder="Question/query" />
                <input type="submit" />
            </form>
            </div>
        </div>
            </div>
        </div > 
    );
};

export default Contact;

 