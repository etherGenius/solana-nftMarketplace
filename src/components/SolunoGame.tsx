import React from 'react'
import Link from "next/link"
import GetNftData from "../components/GetRandomNft"

function SolunoGame() {
    return (
        <div className="mt-40 ">
            <div className="container mx-auto mt-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                    <div className="flex justify-center text-6xl  p-4 ">
                     
                        <GetNftData/>
                    </div>
                    <div className="flex justify-center text-6xl  p-4 ">

                        <Link
                            href={{
                                pathname: '/explore',
                                query: { name: 'explore' },
                            }}
                        >
                            <button
                                className="px-12 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."

                            >
                                Match UNO
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SolunoGame