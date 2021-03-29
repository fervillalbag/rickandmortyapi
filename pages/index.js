
import { Fragment, useEffect, useState } from 'react'
import SeoTemplate from '../components/SeoTemplate'
import Characters from '../components/Characters'
import Loading from '../components/Loading'
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const GET_ALL_CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
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

  const [currentPage, setCurrentPage] = useState(1)

  const router = useRouter()
  const { query: { page } } = router

  useEffect(() => {
    setCurrentPage(currentPage)
  }, [currentPage])

  const { data, loading } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: currentPage
    }
  })

  if (loading) return <Loading />
  const { characters } = data

  return (
    <Fragment>
      <SeoTemplate />
      <Characters
        characters={characters}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Fragment>
  )
}