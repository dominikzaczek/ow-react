export default async function getProperties() {
    const fetchData = await fetch(
        'https://owfetechtask.blob.core.windows.net/titledata/testdata.json'
    )

    if (fetchData.ok) {
        const json = await fetchData.json()

        return json
    }

    return null
}
