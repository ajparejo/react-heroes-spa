import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
    <>
      <h1 className="mt-1">Marvel Comics</h1>
      <hr/>

      <HeroList publisher='Marvel Comics'/>
    </>
  )
}
