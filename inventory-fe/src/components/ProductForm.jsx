import { useState } from "react"

export default function ProductForm() {

    const [productsList, setProductsList] = useState([])

    const addProduct = (formData) => {
        const newProduct = formData.get("product")
        setProductsList( prevProductsList => [...prevProductsList, newProduct])
    }


    return (
        <form action={addProduct} className="bg-blue-200" flex flex-col>
            <label htmlFor="">Products:</label>
            <input type="text" />
            <button>Add product</button>
        </form>
    )
}