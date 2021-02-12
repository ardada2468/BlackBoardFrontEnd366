import _ from 'lodash'
import React from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import getStaticProps from "../pages/article/[slug]"
// const data = ({ articles, categories, homepage }) => {



// }

// export async function getStaticProps() {
//     // Run API calls in parallel
//     const [articles, categories, homepage] = await Promise.all([
//       fetchAPI("/articles?status=published"),
//       fetchAPI("/categories"),
//       fetchAPI("/homepage"),
//     ]);
  
//     return {
//       props: { articles, categories, homepage },
//       revalidate: 1,
//     };
//   }

//   const source = _.times(5, ({ articles, categories, homepage }) => ({
//         title: articles.title,
//         discription: articles.description,
//         image: getStrapiMedia

// }))

    // getStaticProps()

    //   const source = _.times(5, (articles, categories) => ({
    //         title: articles.title,
    //         discription: articles.description,
            

    // }))

  

    

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

function SearchExampleStandard() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
      </Grid.Column>

      <Grid.Column width={10}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default SearchExampleStandard
