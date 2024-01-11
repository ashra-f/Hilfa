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
    <li class="link-card">
      <a href={props.href}>
        <img src={props.image} alt={props.title} height="200" width="200" />
        <h4>{props.title}</h4>
        <p>{props.body}</p>
        <p>${props.price}</p>
      </a>
    </li>
  )
}

export default ProductCard
