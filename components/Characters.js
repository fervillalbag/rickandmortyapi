
import CharacterItem from './CharacterItem'

export default function Characters({ characters }) {

  const { results } = characters

  return (
    <section className="character container">
      <h1 className="character__title">Rick and Morty API</h1>
      <div className="character__grid">
        {results.map(character => (
          <CharacterItem
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </section>
  )
}
