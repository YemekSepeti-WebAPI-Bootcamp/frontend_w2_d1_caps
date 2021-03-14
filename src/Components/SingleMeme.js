const styles = {
    img: {
        border: "1px solid black",
        borderRadius: 5
    }
}

const SingleMeme = ({ meme, onSelect = () => { } }) => {
    return <div >
        <h1> {meme.name}</h1>
        <img
            src={meme.url}
            width={400}
            style={styles.img}
            onClick={() => onSelect(meme)} />
    </div >
}

export default SingleMeme