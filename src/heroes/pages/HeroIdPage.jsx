import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroIdPage = () => {

  const { id } = useParams ();
  const navegar = useNavigate();

  const hero = useMemo( () => getHeroById(id), [id] );

  const onNavigateBack = () => {
    navegar(-1);
  }

  if (!hero) {
    return <Navigate to={marvelpage}/>
  }

    return (
      <div className="row mt-5">
        <div className="col-4">
          <img src={`/assets/${id}.jpg`} alt={hero.superhero} className="img-thumbnail animate__animated animate__slideInLeft"/>
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
            <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
            <li className="list-group-item"> <b>Primera aparición:</b> {hero.first_appearance} </li>
          </ul>
          <h5 className="mt-3">Personajes</h5>
          <p>{hero.characters}</p>
          <button className="btn btn-primary" onClick={onNavigateBack}>Regresar</button>
        </div>
      </div>
    )
  }