import PropTypes from "prop-types"
import "antd/dist/antd.css"
import Head from "next/head"

const NodeBird = ({Component}) => {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>    
            <Component/>
        </>
    )
}

NodeBird.prototype = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird