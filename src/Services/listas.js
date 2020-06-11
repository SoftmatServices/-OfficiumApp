const baseUrl ='http://oficium.softmatservices.com'

export async function getListasByPopular () {
	const response = await fetch(`${baseUrl}/v1/getAdAll`) 
	const responseJson = await response.json()
	return responseJson
	}

export async function getListasBySearch (q) {
	const response = await fetch(`${baseUrl}/v1/getAdSearch/${q}`) 
	const responseJson = await response.json()
	return responseJson
	}

export async function getListasByCategory () {
	const response = await fetch(`${baseUrl}/v1/getServicesCategoryAll`) 
	const responseJson = await response.json()
	return responseJson
	}

export default {
	getListasByPopular,
	getListasBySearch,
	getListasByCategory
}