import * as React from "react"

import Preloader from "../components/Wrapper/preloader.js"
import Seo from "../components/Wrapper/seo.js"
import Eclipse from "../components/Eclipse/eclipse.js"

const IndexPage = () => {
  const [
    hasMounted,
    setHasMounted,
  ] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <Preloader />
  }

  return (
    <>
      <Seo title="Home" />
      <Eclipse />
    </>
  )
}

export default IndexPage
