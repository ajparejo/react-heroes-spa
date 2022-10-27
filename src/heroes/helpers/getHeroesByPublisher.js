import { heroes } from '../data/Heroes';


export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics', 'Image Comics'];
    if ( !validPublishers.includes(publisher)) {
        throw new Error(`${publisher} no existe en la base de datos`);
    }

    return heroes.filter( heroes => heroes.publisher === publisher );

}