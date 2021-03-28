
import { Fragment } from 'react'
import SeoTemplate from '../components/SeoTemplate'
import Characters from '../components/Characters'
import { useQuery, gql } from '@apollo/client'
import Loading from '../components/Loading'

const GET_ALL_CHARACTERS = gql`
  query characters {
    characters {
      results {
        id
        name
        image
        location {
          name
        }
      }
    }
  }
`

export default function Index() {

  const { data, loading } = useQuery(GET_ALL_CHARACTERS)
  if (loading) return <Loading />
  const { characters } = data

  return (
    <Fragment>
      <SeoTemplate />
      <Characters characters={characters} />
    </Fragment>
  )
}