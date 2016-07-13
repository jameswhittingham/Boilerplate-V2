export class User {

	constructor(
    public id: number,
  	public firstName: string,
	  public lastName: string,
	  public email: string,
	  public confirmEmail: string,
	  public address1: string,
	  public postcode: number,
	  public state: string,
	  public agreed: boolean,
	  public address2?: string
  ) {  }

}