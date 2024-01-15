import type { Component } from "solid-js"

// Define the interface for props
interface Props {
  image: string
  title: string
  body: string
  price: string
  href: string
}

const ProductCard: Component<Props> = (props) => {
  return (
    <li class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl mx-0">
      <a href={props.href} class="block">
        <div class="relative flex justify-center items-center">
          <img
            src={props.image}
            alt={props.title}
            class="object-cover object-center w-64 h-64"
          />
        </div>
        <div class="mt-4 p-4">
          <span class="text-gray-900 font-semibold text-lg">{props.title}</span>
          <p class="mt-2 text-gray-600 text-sm">{props.body}</p>
          <p class="mt-2 text-gray-900 font-bold text-xl">${props.price}</p>
        </div>
      </a>
    </li>
  )
}

export default ProductCard
