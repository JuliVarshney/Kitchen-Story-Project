export interface Product {
     /* --------- Properties ---------  */
     productId: number;
     imageUrl: string;
     productName: string;
     price: number;
     brand: string;
     rating: number;
     numOfReviews: number;
     description: string;
     //favorite:boolean; //this is a customer specific attribute
     organic:boolean;
     tags:string[];
 
}
