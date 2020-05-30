const baseUrl ='http://efactura.softmatservices.com'

export async function setAddByPopular () {
	const response = await fetch(`${baseUrl}/v1/getAdAll`) 
	const responseJson = await response.json()
	return responseJson
	}



export default {
	setAddByPopular
}