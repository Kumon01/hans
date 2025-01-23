import axios from "axios"

const formatRupiah = (value) => {
    return `Rp ${new Intl.NumberFormat('id-ID', { minimumFractionDigits: 0 }).format(value)}`
}

const fectchAPI = () => (axios.create({  
    baseURL: 'http://127.0.0.1:8000/api', 
    headers: {
        "Accept": "application/json",
    }
}))

export {
    formatRupiah,
    fectchAPI
}
