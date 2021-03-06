import React from 'react'

function AboutCard(props) {

  return (
    <div className="p-10">
        <div className=" w-full h-55 lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('${props.image}')`}} title="Mountain">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{props.heading}</div>
            <p className="text-gray-700 text-base">{props.text}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutCard