export function ValidationPassword(password: string, confirmPassword:string){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(password.length < 6 || 
       password !== confirmPassword ||
       !/[A-Z]/.test(password) ||
       !/[0-9]/.test(password) ||
       !specialChars.test(password)
       )
    {
        return false
    }
    return true
}
