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
    <li class="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <a href={props.href} class="block relative">
        <img
          src={props.image}
          alt={props.title}
          class="object-cover object-top w-full h-64"
        />
      </a>
      <div class="mt-4 p-4">
        <a href={props.href} class="text-gray-900 font-semibold text-lg">
          {props.title}
        </a>
        <p class="mt-2 text-gray-600 text-sm">{props.body}</p>
        <p class="mt-2 text-gray-900 font-bold text-xl">${props.price}</p>
      </div>
    </li>
  )
}

export default ProductCard
