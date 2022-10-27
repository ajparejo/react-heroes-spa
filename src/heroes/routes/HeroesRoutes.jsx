import { Navigate, Route, Routes } from "react-router-dom"

import { DcPage, MarvelPage, ImagePage, SearchPage, HeroIdPage } from "../pages"
import { Navbar } from "../../ui"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path='marvel' element={<MarvelPage />}/>
                <Route path='dc' element={<DcPage />}/>
                <Route path='image' element={<ImagePage />}/>

                <Route path='search' element={<SearchPage />}/>
                <Route path='heroid/:id' element={<HeroIdPage />}/>

                <Route path='/' element={<Navigate to='/dc' />}/>
            </Routes>
        </div>
    </>
  )
}
