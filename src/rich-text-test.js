export default App;
import React, { useState } from 'react'
import { ChakraProvider,
Container,
Box,
extendTheme,
Heading,
Stack,
Textarea,
Text,
Button} from '@chakra-ui/react'

const theme = extendTheme({
colors: {
primary: {
grey: "#f5f5f5",
main: "#E39DF5",
},
secondary: {
main: "#efefefe",
}
}
})

const Initial = [
{doc_name: "TypeScript is a journal", doc_content: "JavaScript needs your attention"},
{doc_name: "How much do you want this?", doc_content:"I want this"},
]

const newInitial = [
{doc_name: " ", doc_content: " "}
]



function App2() {


const handleList = (document, index) => {
setActive(document)
setIndex(index)
}

const handleLast = ( document) => {
setActive(document)
}

let handleInputChange = (e) => {
let inputValue = e.target.value
const newWords = [...words]
newWords[index].doc_content = inputValue
setWords(newWords)
console.log(inputValue, newWords)
}

let handleCreate = (e) => {
const newValue = e.target
const newWord = [...words]
newWord[index].document = newValue
setWords(newWord)
}

const [words, setWords] = useState(Initial);
const [word, setWord] = useState(newInitial);
const [active, setActive] = useState(null);
const [index, setIndex] = useState(null)

const addNewDoc = () => {
setDocuments([...documents, { doc_name: " ", doc_content: " " }]);
}

return (
<div>
<ChakraProvider theme={theme}>
<Container>
<Box bg="primary.main" p={5} borderWidth="1px" minWidth="100%" color="white" textAlign="center">
<Heading as="h3" size='lg'>
<p>My name is mimi</p>
<p bg="white">Online Word Document</p></Heading>
</Box>
{/* <Box display="flex" flexDirection="row" bg='white' p={5} borderWidth="5px" minWidth="100%" textAlign="center" color="black"></Box> */}
<Box mt={8} display="flex" height="100vh" flexDirection="row" color="black"
bgColor="white">
<Stack spacing={8} borderColor="primary.main" mt={6}>
<Button onClick={() => addNewDoc()} color="white" bgColor="primary.main">Create new document</Button>

{words.map((document, index) => {
return (

<Box onClick={()=>handleList(document, index)} key={index}>
<Heading fontSize='xl'>{document.doc_name}</Heading>
<Text>{document.doc_content}</Text>
</Box>
)
})}
</Stack>

<Box p={8} mx={8} flexGrow={1}>
<Heading fontSize="4xl">{active?.doc_name}
<Textarea
mt={6}
value={active?.doc_content}
height="100%"
onChange={(e)=>handleInputChange(e)}
placeholder="This is the beginning of your text"
></Textarea>
</Heading>
</Box>
</Box>
</Container>
</ChakraProvider>
</div>
)
}

export default App2


// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react'
// import { ChakraProvider,
// Stack,
// extendTheme ,
// Box,
// Container,
// Center,
// Text,
// Heading,
// Textarea,
// CSSReset,
// Typography,
// Button,
// Select
// } from '@chakra-ui/react'

// const theme = extendTheme({
// colors: {
// primary: {
// main: "#3f51b5",
// grey: "#f5f5f5",
// },
// secondary: {
// main: "#008060",
// },


// },
// })


// const intialState = [
// { doc_name: "History of the World", doc_content: "This is the history of the world"},
// { doc_name: "Challenge of humanity", doc_content: "This is the beginning of the challenge of humanity"}
// ]

// function App() {


// const [documents, setDocuments] = useState(intialState)
// const [active, setActive] = useState(null)
// const [index, setIndex] = useState(null)
// // const [save, setSave] = useState(null)




// // const handleInputChange = (e, active) => {
// // const inputValue = e.target.value

// // active.doc_content = inputValue
// // setDocuments(active.doc_content)

// // }

// const handleList = (document, index) => {
// setActive(document)
// setIndex(index)
// }


// let handleInputChange = (e) => {
// let inputValue = e.target.value
// const newDocuments = [...documents]
// newDocuments[index].doc_content = inputValue
// setDocuments(newDocuments)
// console.log( inputValue, newDocuments)
// }

// return (
// <ChakraProvider theme={theme}>
// <CSSReset/>
// <Container maxW="full">
// <Box bg="primary.main" p={5} borderWidth="1px" minWidth="100%" textAlign="center" color="white">
// <Heading as='h4' size='lg'>
// Online Word Document Editor
// </Heading>

// </Box>
// {/* <Box display="flex" flexDirection="column" bg="gray.50" p={5} borderWidth="1px" minWidth="100%" textAlign="center" color="black">
// <Heading as='h3' size='lg'>
// <Select placeholder='Calibra'>
// <option value='option1'>Times new Roman</option>
// <option value='option2'>Ariel</option>
// <option value='option3'>San seriff</option>
// </Select>
// <Select>
// <option></option>
// </Select>

// </Heading>

// </Box> */}

// <Box mt={8} display="flex" flexDirection={["row"]} height="100vh" bgColor="whiteAlpha.50">

// <Stack spacing={8} borderColor="primary.main" mt={6} >
// <Button onClick={()=>handleList(document)} color="white" bg="primary.main">Create new document</Button>

// {
// documents.map((document, index) => {
// return (
// <Box onClick={() => handleList(document, index)} p={5} shadow='md' cursor="pointer" borderWidth='1px' key={index} maxW={500}>
// <Heading fontSize='xl'>{document.doc_name}</Heading>
// <Text isTruncated mt={4}>{document.doc_content}</Text>
// </Box>
// )
// })
// }
// </Stack>



// <Box p={8} mx={8} flexGrow={1}>
// <Heading fontSize='4xl'>{active?.doc_name}</Heading>
// <Textarea
// mt={6}
// value={active?.doc_content}
// onChange={(e)=>handleInputChange(e)}
// placeholder='Here is a sample placeholder'
// height='100%'
// resize='none'
// />
// <Button type='submit' m={2}>Save</Button>
// <Button type='submit' m={2}>Download</Button>
// </Box>

// </Box>

// </Container>


// </ChakraProvider>

// );
// }

// export default App;