import './sign-in.scss'
import { useState } from "react";
import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";
import { signInAuthUserWithEmailPassword, signInWithGooglePopup } from "../../utils/firebase";

const defaultFormFields = {
    email: "",
    senha: ""
}

export function SingIn() {

    const [formFilds, setFormFilds] = useState(defaultFormFields)
    const { email, senha } = formFilds

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFilds({ ...formFilds, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        //Para logar com email e senha já cadastrado
        try {
            const { user } = await signInAuthUserWithEmailPassword(email, senha)
            console.log(user)
        } catch (e) {
            console.log(e)
        }

        // console.log(formFilds)
        setFormFilds(defaultFormFields)
    }

    //Chamar a função do Firebase para logar com Google
    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }


    return (
        <div>
            <p className="form-title">Você já possui conta?</p>
            <form className="form-container" onSubmit={handleSubmit}>
                <FormInput
                    label="E-mail"
                    type="email"
                    requeried
                    name="email"
                    placeholder="digite seu e-mail"
                    autocomplete="off"
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label="Senha"
                    type="password"
                    requeried
                    name="senha"
                    placeholder="digite sua senha"
                    onChange={handleChange}
                    value={senha}
                />
                <Button type="submit">
                    Entrar
                </Button>
                <Button type="button" typeButton="google" onClick={signInWithGoogle}>
                    Entrar com conta Google
                </Button>
            </form>
        </div>
    )
}