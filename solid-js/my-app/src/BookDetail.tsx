import {useParams} from "solid-app-router";

export default function BookDetail() {
  const params = useParams();

  return (
    <li>
      {params.bookId}
    </li>
  )
}