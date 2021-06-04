import React from 'react'
import Head from 'next/head'
const Meta = ({ title, kw, desc }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta name="author" content="WorseCompanies" />
                <meta name="keywords"
                    content={kw} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                    crossOrigin="anonymous" />
            </Head>
        </>
    )
}

export default Meta

Meta.defaultProps = {
    title: "WorseCompanies",
    kw: "worse-companies,open-source",
    desc: "An open platform to talk about your bad experiences with a company."
}