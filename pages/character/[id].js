
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import Loading from '../../components/Loading'

const GET_CHARACTER_ID = gql`
  query character($id: ID!) {
    character(id:$id) {
      id
      image
      name
      status
      species
      gender
      location {
        name
      }
      created
      origin {
        name
      }
    }
  }
`

export default function CharacterPage() {

  const router = useRouter()
  const { id } = router.query
  const { data, loading } = useQuery(GET_CHARACTER_ID, {
    variables: { id }
  })

  if (loading) return <Loading />
  const { character } = data
  console.log(character)

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="character-page container">

      <button
        type="button"
        className="character-page__back"
        onClick={handleBack}
      >
        Volver
      </button>

      <div className="character-page__grid">
        <div className="character-page__media">
          <img src={character.image} alt={character.name} className="character-page__image" />
          <span className="character-page__title">{character.name}</span>
        </div>
        <div className="character-page__info">
          <span className="character-page__subtitle">
            Status: <span>{character.status}</span>
          </span>
          <span className="character-page__subtitle">
            Species: <span>{character.species}</span>
          </span>
          <span className="character-page__subtitle">
            Gender: <span>{character.gender}</span>
          </span>
          <span className="character-page__subtitle">
            Location: <span>{character.location.name}</span>
          </span>
          <span className="character-page__subtitle">
            Created: <span>{character.created}</span>
          </span>
          <span className="character-page__subtitle">
            Origin: <span>{character.origin.name}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
