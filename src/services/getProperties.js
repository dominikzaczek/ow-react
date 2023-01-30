export default async function getProperties() {
    const data = await fetch(
        'https://owfetechtask.blob.core.windows.net/titledata/testdata.json'
    )

    const json = await data.json()

    return json
}
