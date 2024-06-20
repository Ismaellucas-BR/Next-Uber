import React from 'react'
import Image from 'next/image'

function BlogComponent(props) {
  return (
    <div className={`loginRedirect flex flex-col mt-4  ${props.divClass}`}>
              <div className="w-full">
              <Image
                src={props.image}
                alt="Motorista da Uber"
                layout='responsive'
                width={800}
                height={800}
              />
              </div>
              <h4 className="text-h4-bold text-lg my-4">
                {props.title}
              </h4>
              <p className="text-lg">
                {props.content}
              </p>
              <div className=" inline-flex my-10">
                <p className="text-black font-txt border-b pb-1">
                  {props.titleBtn}
                </p>
              </div>
            </div>
  )
}

export default BlogComponent