import {ReactNode, createContext, useMemo} from 'react'
import { onAuthStateChanged, User } from 'firebase/auth';
import { useAuth } from './../hooks/useAuth';
import { useEffect } from 'react';
import {auth} from 'src/firebase'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Loader from 'src/components/loader/Loader';


interface AuthContextState {
    user: User | null;
    error: string;
    isLoading: boolean;
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextState>({
   user: null,
   error: '',
   isLoading: false,
   signIn: async () => {},
   signUp: async () => {},
   logout: async () => {},
})

const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [initialLoader, setInitialLoader] = useState<boolean>(true)
    const {error, isLoading, logout, signIn, signUp, user, setUser, setIsloading} = useAuth()
    const router = useRouter()

    const value = useMemo(() => ({
        user, isLoading, logout, signIn, error, signUp

        //eslint-disable-next-line
    }), [user, isLoading, error])

    useEffect(() => onAuthStateChanged(auth, user => {
        if(user){
            setIsloading(false)
           setUser(user)
        }else{
            setIsloading(true)
            setUser(null)
            router.push("/auth")
        }
        setIsloading(false)
        setInitialLoader(false)

        //eslint-disable-next-line
    }), [])

    return(
        <AuthContext.Provider value={value}>{!initialLoader ? children : <Loader />}</AuthContext.Provider>
    )
}

export default AuthContextProvider