
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import PokemonCard from "./components/PokemonCard/PokemonCard";

import bg2 from './assets/bg2.jpg'
import bg3 from './assets/bg3.jpg'
import s from './App.module.css'
import POKEMONS from './assets/data/pokemons.json'

const App = () => {

  return (
    <>
      <Header title='Pokemon game' desc='Cool game'/>
      <Layout title='its a title'>
          <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
          Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
          <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>

      </Layout>
      <Layout title='Мои покемоны'>
          <div className={s.flex}>
            {
              POKEMONS.map(item=><PokemonCard key={item.id} 
                type={item.type} name={item.name} id={item.id} values={item.values} img={item.img}/>)
            }
          </div>
      </Layout>
      <Layout title='its a title' urlBg={bg3}>
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
        Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
        
      </Layout>
      <Footer/>
    </>
  )
}

export default App;
