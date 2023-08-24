'use client'
import Image from "next/image"
import Link from "next/link"
import { AppContext } from "./Context"
import { useContext } from "react"

const Header = () => {
    const {showSignin} = useContext(AppContext)
    return (
        <main className="flex justify-between items-center w-full px-16 pt-4 h-20 max-lg:px-4">
            <Image height={120} width={120} src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/logo.svg'></Image>
            {showSignin && (<Link href='/login'><button className="text-blue-700 bg-white rounded-full py-3 px-10 mr-4 max-lg:mr-0 max-lg:px-4">Sign In</button></Link>)}
        </main>
    )
}

export default Header