export default function Validate(values) {
    let errors = {};
  
    if(!values.username) {
      errors.username = '→ Please enter username';
    }
    else if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/.test(values.username)) {
      errors.username = '→ Username cant have special characters!'
    }
    if(!values.email) {
      errors.email = '→ Please enter email';
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = '→ Please enter a valid email'
    }
    if(!values.password) {
      errors.password = '→ Please enter password';
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#@$!%*?&])([A-Za-z\d$@$!%*?&]|[^]){8,15}$/.test(values.password)) {
      errors.password = '→ 8 to 15 characters - At least one capital letter - At least one digit - Not spaces - At least one special character'
    }
    return errors;
}