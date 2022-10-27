import { HeroList } from "../components"

export const DcPage = () => {
  return (
    <>
      <h1 className="mt-1">DC Comics</h1>
      <hr/>

      <HeroList publisher='DC Comics'/>

    </>
  )
}
