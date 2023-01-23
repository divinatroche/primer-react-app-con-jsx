const Todo = (props) => {
    const {item} = props;

    return (
        <div>
            <li>{item}</li>
        </div>
    )
}

export default Todo;