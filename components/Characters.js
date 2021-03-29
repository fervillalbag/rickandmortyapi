
import CharacterItem from './CharacterItem'

export default function Characters({ characters, setCurrentPage, currentPage }) {

  const { results } = characters

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      scrollTo(0, 0)
    }
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
    scrollTo(0, 0)
  }

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

      <div className="character__footer">
        <button
          type="button"
          className="character__pagination"
          onClick={handlePrev}
        >
          Anterior
        </button>
        <button
          type="button"
          className="character__pagination"
          onClick={handleNext}
        >
          Siguiente
        </button>
      </div>
    </section>
  )
}
