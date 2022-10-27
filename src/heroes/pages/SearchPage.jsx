import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
    
    const navegar = useNavigate();
    const localizacion = useLocation();

    const { q = '' } = queryString.parse( localizacion.search );
    const heroes = getHeroesByName(q)
  
    const { searchText, onInputChange } = useForm({
      searchText: q,
    });


    const handleInputText = (event) => {
      event.preventDefault();
      if(searchText.trim().length < 3) return
      
      navegar(`?q=${searchText}`)
    }

    return (
      <>
        <h1 className="mt-4">Pagina de Busqueda</h1>
        <hr/>

        <div className="row">
          <div className="col-5">
            <h5>Buscador</h5>
            <hr/>
            <form onSubmit={handleInputText}>
              <input type="text" className="form-control" name="searchText" value={searchText} onChange={onInputChange} />
              <button type="submit" className="btn btn-secondary mt-3">Buscar</button>
            </form>
          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr/>

            { (q === '') ?
              <div className="alert alert-primary animate__animated animate__fadeIn">Buscando heroes</div>
              : (heroes.length === 0)
              && <div className="alert alert-danger animate__animated animate__fadeIn"><i>No se encuentra <b>{q}</b></i></div>
            }
            { heroes.map( hero => <HeroCard key={hero.id} {...hero} />) }
          </div>
        </div>
      </>
    )
  }