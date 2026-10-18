import { Brand } from "../types/productType";

export async function getAllBrands()  :Promise<Brand[]>{

  try {
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`)
    if (!response.ok) throw new Error('Api Error')
    const payload = await response.json()
     return payload.data;
}
  catch (error) {
    throw new Error('Api Error')
  }
}