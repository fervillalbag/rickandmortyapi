
import { useRouter } from 'next/router'

export default function CharacterItem({ character }) {

  const { id, image, name, location } = character
  const router = useRouter()

  const handleToCharacter = () => {
    router.push(`/character/${id}`)
  }


  return (
    <div className="character__item">
      <div className="character__media">
        <img loading="lazy" src={image} alt="" className="character__image" />
      </div>
      <div className="character__info">
        <span className="character__name">{name}</span>
        <span className="character__location">
          {location.name}
        </span>
        <button
          className="character__button"
          type="button"
          onClick={handleToCharacter}
        >
          Ver más
        </button>
      </div>
    </div>
  )
}
