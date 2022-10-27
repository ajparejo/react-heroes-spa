import { HeroList } from "../components/HeroList"

export const ImagePage = () => {
  return (
    <>
      <h1 className="mt-1">Image Comics</h1>
      <hr/>

      <HeroList publisher='Image Comics'/>
    </>
  )
}
