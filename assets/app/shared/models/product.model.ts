export class Product{
  constructor(
    public id:any,
    public name:string,
    public logo:string,
    public description:string,
    public shortdescription:string,
    public minrequirement:string,
    public termsncond:string,
    public youtube:string,
    public industries:any[],
    public languages:any[],
    public departments:any[],
    public categories:any[],
    public features:any[],
    public screenshots:any[],
    public purchase_link:any[],
    public pricing_model:any[],
    public extraservices:any[]
  ){}
}
