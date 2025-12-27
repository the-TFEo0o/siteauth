import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signUp = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) alert(error.message)
    else alert('Compte créé ! Vérifie ton email.')
    setLoading(false)
  }

  const signIn = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) alert(error.message)
    else alert('Connecté !')
    setLoading(false)
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Connexion</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={signIn} disabled={loading}>
        Se connecter
      </button>

      <button onClick={signUp} disabled={loading} style={{ marginLeft: 10 }}>
        Créer un compte
      </button>
    </div>
  )
}
