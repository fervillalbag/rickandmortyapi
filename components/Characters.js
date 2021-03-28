
import CharacterItem from './CharacterItem'

export default function Characters({ characters }) {

  const { results } = characters

  return (
    <section className="character container">
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
