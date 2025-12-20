import supabase from "../lib/supabase";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function SignupPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handLeSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        try{
            await supabase.auth.signUp({email, password});
            navigate("/login");
    }
        catch (error:any){
            setError(error.message);
        }
        finally{
            setLoading(false);
        }
        
    }

    return (
        

    )
}