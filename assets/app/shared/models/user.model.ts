export class User{
  constructor(
    public personal_name?: string,
    public email?:string,
    public password?:string,
    public password_confirmation?:string,
    public company_name?:string,
    public position?:string,
    public department?:string,
    public countrycode?:string,
    public phone?:number,
    public facebook?:string,
    public twitter?:string,
    public line?:string
  ){}
}
