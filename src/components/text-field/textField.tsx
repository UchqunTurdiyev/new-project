import { TextFieldProps } from './text-field.props';
import { FieldHookConfig, useField, ErrorMessage } from 'formik';

function TextField({ ...props }: TextFieldProps & FieldHookConfig<string>) {
    const [field, meta] = useField(props);

    console.log(meta);
    
    
  return (
   <div>
    <label className={`inline-block w-full ${meta.touched && meta.error && 'border-2 border-red-500'}`}>
      <input className="input" {...props} {...field} />
    </label>
      <p className='text-red-500'><ErrorMessage name={field.name} /></p>
   </div>
  );
}

export default TextField;
