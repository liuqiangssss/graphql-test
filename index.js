const user = {
    name: 'John',
    age: 30
}
const hi = tag`my name is ${user.name} and I am ${user.age} years old`;
console.log(hi);

function tag(strings, ...values) {
    console.log(strings, values);
    return 'hihi'
}

// styled-components
const Button = styled.button`
    background-color: ${props => props.primary ? 'red' : 'blue'};
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.primary ? 'pink' : 'lightblue'};
    }
    &:active {
        background-color: ${props => props.primary ? 'darkred' : 'darkblue'};
    }
`;
<Button />
