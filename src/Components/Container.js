const Container = ({ children, style = {} }) => {
    return <div style={{ margin: 20, ...style }}>
        {children}
    </div>
}

export default Container