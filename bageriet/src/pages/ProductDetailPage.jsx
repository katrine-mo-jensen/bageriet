import { useParams } from "react-router-dom"
import { useFetch } from "../components/UseFetch";

export function ProductDetailPage () {
    const { id } = useParams();

    const url = `https://api.mediehuset.net/bakeonline/products/${id}`;
    const { data } = useFetch(url);
    return (
        <div>
            
        </div>
    )
}