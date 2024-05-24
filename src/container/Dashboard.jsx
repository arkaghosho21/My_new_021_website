import React from 'react';
import { Container } from "postcss";

function Dashboard() {
    return (
        <>
        
            <main className="bg-fuchsia-100 flex justify-around">
                <div className="main py-40 pl-9">
                    <div className=" text-6xl">
                        This is the phone in town
                    </div>
                    <p className="py-9 w-1/3">Hrithik Roshan is an Indian actor who works in Hindi cinema. He has portrayed a
                        variety of characters and is known for his dancing skills.</p>
                    <div className="my-4">
                        <button className="bg-purple-500 rounded-2xl px-3 py-2 text-white hover:text-slate-900 hover:bg-white mx-2 hover:border-2 hover:border-black">Bye now</button>
                        <button className="bg-purple-500 rounded-2xl px-3 py-2 text-white hover:text-slate-900 hover:bg-white mx-2 hover:border-2 hover:border-black">Contact Us</button>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCCVV2vUvBxBB1v-eaJLmcS7rm3vXMd7RGIQ3c-
          kQhYOHAMTnRmQGSDtShEmQyipw0cA&usqp=CAU" className="h-80 " alt=""></img>
                </div>
            </main>
        </>
    )
}

export default Dashboard