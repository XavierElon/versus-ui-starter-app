export interface NewsletterUserData {
  email: string
  subscribed: boolean
}


export interface UserData {
  firstName: string
  lastName: string
  mobileNumber: number | ''
  userName: string
  password: string 
  email: string
}

export class ValidationPattern {
  password: RegExp;
  mobileNumber: RegExp;
  email: RegExp;
  userName: RegExp;
  name: RegExp;
  
  constructor() {
  this.password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  this.mobileNumber = /^\d{10}$/;
  this.email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  this.userName = /^[a-zA-Z0-9]{3,20}$/;
  this.name = /^[a-zA-Z0-9_]{2,20}$/;
  }
  }
  
  export class ErrorMessage {
    password: string
    mobileNumber: string
    email: string
    userName: string
    firstName: string
    lastName: string
    constructor() {
      this.password =
        'Password must contain at least 8 characters, at least one letter, at least one number, and at least one special character (@$!%*#?&)'
      this.mobileNumber = 'Invalid phone number'
      this.email = 'Invalid email'
      this.userName =
        'User name must contain only letters and numbers, and must be between 3 - 20 characters and have no spaces'
      this.firstName = 'First name must contain only letters, and must be between 2 - 30 characters and have no spaces'
      this.lastName = 'Last name must contain only letters, and must be between 2 - 30 characters and spaces'
    }
  }
  
  
  
  
