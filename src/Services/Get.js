import axios from 'axios'

const baseUrl = 'http://oficium.softmatservices.com'

export async function getListasByPopular() {
	const response = await fetch(`${baseUrl}/v1/getAdAll`)
	const responseJson = await response.json()
	return responseJson
}

export async function getListasBySearch(q) {
	const response = await fetch(`${baseUrl}/v1/getAdSearch/${q}`)
	const responseJson = await response.json()
	return responseJson
}

export async function getServiceType() {
	const result = await axios.get(`${baseUrl}/v1/getServicesTypeAll`)
	return result
}

export async function getServicesCategoryAll() {
	const result = await axios.get(`${baseUrl}/v1/getServicesCategoryAll`)
	return result
}

export async function getDeptosAll() {
	const result = await axios.get(`${baseUrl}/v1/getDeptosAll`)
	return result
}

export default {
	getListasByPopular,
	getListasBySearch,
	getServiceType,
	getServicesCategoryAll,
	getDeptosAll

}