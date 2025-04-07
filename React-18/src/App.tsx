import Gameinfo from "./ReactDesign_PATTERNS/Listofdata/Components/Gameinfo";
import MOviesInfo from "./ReactDesign_PATTERNS/Listofdata/Components/MOviesInfo";
import Rednderlist from "./ReactDesign_PATTERNS/Listofdata/Components/Rednderlist";
import { games, movies } from "./ReactDesign_PATTERNS/Listofdata/data";
const s = () => {
  return (
    <>
      <Rednderlist data={games} resourceName="games" dataToRender={Gameinfo} />
      {/* data={games}
      You're passing an array or list named games. This is the actual data you
      want to display. resourceName="games" This is just a label or a name to
      identify what kind of data you're dealing with. It can be used inside the
      component to make the code more flexible. dataToRender={Gameinfo}
      You're passing a component (Gameinfo) that will render each item in the
      list. So Rednderlist will loop over the data and render Gameinfo for each
      game */}
      <hr></hr>
      <Rednderlist
        data={movies}
        resourceName="movies"
        dataToRender={MOviesInfo}
      />
    </>
  );
};

export default s;
