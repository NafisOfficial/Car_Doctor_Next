export const AllServices = async () => {
    const res = await fetch('http://localhost:3000/services/api/get-all')
    const services = res.json()
    return services;
}


export const serviceDetails= async (id)=>{
    const res = await fetch(`http://localhost:3000/services/api/${id}`)
    const service = res.json()
    return service;
}