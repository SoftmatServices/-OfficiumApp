const baseUrl ='http://oficium.softmatservices.com'

export async function registerService (name, description, serviceCatAdId, serviceUserId) {
	const response = await fetch(`${baseUrl}/v1/getAdSearch/${q}`) 
	const responseJson = await response.json()
	return responseJson
	}

export default {
	
}