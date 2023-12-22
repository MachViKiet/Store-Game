// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import Box from "@mui/material/Box";
// import { useEffect, useState } from "react";
// import { getProductByText } from "~/apis/Product_api/SearchProduct/getProductByText";
// import { useNavigate } from "react-router-dom";

// function SearchField() {
//   const [GAMES, setGAMES] = useState([])
//   const [text, setText] = useState('')
//   const [nav, setNav] = useState('')

//   const Navigate = useNavigate()

//   useEffect(() => {
//     getProductByText(text).then((res) => {
//       setGAMES(res)
//     })
//   }, [text])

//   const handleSubmit = (e) => {
//     // console.log(GAMES)
//     // const id = GAMES.filter((game)=> {
//     //   return game.title = text
//     // })[0]._id
//     // if (e.key == 'Enter') {
//     //   console.log(e.target.value, text)
//     //   if (e.target.value == text && text != '') {
//         // const id = GAMES.filter((game) => {
//         //   return game.title = text
//         // })[0]?._id
//         // id && Navigate('/store-game/product/' + id)
//     //   }
//     //   setGAMES([])
//     //   setText(e.target.value)
//     // }

//     // console.log(e, text)
//     // setText(e)
//     console.log(e)
//     setNav(e.target.innerHTML)
//   }

//   const handleSubmit2 = (e) => {
//     console.log(e.target.value,'||', nav)
//     if(e.key == 'Enter' ){
//         const id = GAMES.filter((game) => {
//           return game.title = e.target.value
//         })[0]?._id
//         id && Navigate('/store-game/product/' + id)
//     }
//   }

//   return (
//     <>
//       <Autocomplete
//         size="small"
//         id="Search Field"
//         options={GAMES}
//         autoHighlight
//         getOptionLabel={(GAMES) => GAMES?.title}
//         sx={{
//           color: '#000 !important'
//         }}
//         renderOption={(props, GAMES) => (
//           <Box
//             component="li"
//             sx={{ "& > img": { mr: 2, flexShrink: 0 }, color: "#000", background: '#fff' }}
//             {...props}
//           >
//             {GAMES?.title}
//           </Box>
//         )}
//         onChange={(e) => handleSubmit(e)}
//         onBlur={(e) => console.log('lk',e)}
//         renderInput={(params) => {
//           console.log(params)
//           return (
//             <>
//               <TextField
//                 sx={{
//                   "& Fieldset": {
//                     borderColor: "text.secondary",
//                   },
//                   "& .MuiInputBase-root:hover Fieldset": {
//                     borderColor: "text.secondary",
//                   },
//                   "& .MuiInputBase-root": {
//                     color: 'text.primary'
//                   }
//                 }}
//                 {...params}
//                 label="Search Game"
//                 inputProps={{
//                   ...params.inputProps,
//                 }}
//                 value={text}
//                 onChange={(e) => {
//                   setText(e.target.value)} }
//                 onKeyDown={handleSubmit2}
//               />
//             </>
//           )
//         }}
//       />
//     </>
//   );
// }

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { getProductByText } from "~/apis/Product_api/SearchProduct/getProductByText";
import { useNavigate } from 'react-router-dom';

export default function SearchField() {
   const [choice, setChoice] = useState(0)
   const [option, setOption] = useState([])
   const [optionID, setOptionID] = useState('')
   const [open, setOpen] = useState(false)
   const [maxChoice, setMaxChoice] = useState(0)
   const [text, setText] = useState('')

   const Navigate = useNavigate()

   useEffect(() => {
      getProductByText(text).then((res) => {
         setOption(res)
         setMaxChoice(res.length)
         setChoice(0)
      })
   }, [text])


   const HANDLEOPION = (e) => {
      if(e.key == 'ArrowDown'){
         setChoice(cur => cur + 1 == maxChoice ? 0 :  cur + 1)
      }
      if(e.key == 'ArrowUp'){
         setChoice(cur => cur - 1 == 0 ? maxChoice :  cur - 1)
      }
      if(e.key == 'Enter'){
         e.preventDefault()
         setText(option[choice]?.title)
         setOpen(false)
         option[choice]?.title && Navigate('/store-game/product/' + option[choice]._id) 
      }
   }

   const HANDLESUBMIT = (_id,e) => {
      e.preventDefault()
      console.log('/store-game/product/' + optionID)
      // optionID != '' && Navigate('/store-game/product/' + optionID) 
   }

   return (
      <Box sx = {{
         position: 'relative'
      }}>
         <Paper
            component="form"
            sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: '100%', bgcolor: '#fff' }}
         >
            <IconButton sx={{ p: '10px', color: '#000' }} aria-label="menu" color='#000'>
               <MenuIcon color='#000' />
            </IconButton>
            <InputBase
               value={text}
               onKeyDown={HANDLEOPION}
               onChange = {(e) => {
                  setOpen(true)
                  setText(e.target.value)}}
               sx={{ ml: 1, flex: 1, color: '#000' }}
               placeholder="Search Your Games"
               inputProps={{ 'aria-label': 'search your game' }}
               onSubmit={(e) => HANDLESUBMIT(
                  option.filter((op) => {
                     op.title == text
                  })[0]?._id ? option.filter((op) => {
                     op.title == text
                  })[0]._id : '', e
               )}
            />
            <IconButton type="button" sx={{ p: '10px', color: '#000' }} aria-label="search">
               <SearchIcon onClick = {() => {
                  option[choice]?.title && Navigate('/store-game/product/' + option[choice]._id) 
               }} />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5, width: 2, color: '#000', borderColor: '#ccc' }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px', color: '#000' }} aria-label="directions">
               <CloseIcon onClick = {() => setText('')} />
            </IconButton>
         </Paper>

         <Paper sx = {{
            width: '100%',
            mt: 0.5,
            position: 'absolute',
            zIndex: 10,
         }}>
            {text != '' && open && option.map((option, index) => {
            return (
               <Box key = {option._id} sx = {{
                  p: '6px 12px',
                  color: '#000',
                  backgroundColor: choice == index && '#fff' ,
                  borderRadius: 2,
               }}
               onClick = {() => {
                  setText(option.title)
                  setOptionID(option._id)
               }}>
                  {option.title}
               </Box>
            )
            })}
         </Paper>

      </Box>



   );
}

// // const option = [
// //   { label: "The Shawshank Redemption", year: 1994 },
// //   { label: "The Godfather", year: 1972 },
// //   { label: "The Godfather: Part II", year: 1974 },
// //   { label: "The Dark Knight", year: 2008 },
// //   { label: "12 Angry Men", year: 1957 },
// //   { label: "Schindler's List", year: 1993 },
// //   { label: "Pulp Fiction", year: 1994 },
// //   {
// //     label: "The Lord of the Rings: The Return of the King",
// //     year: 2003,
// //   },
// //   { label: "The Good, the Bad and the Ugly", year: 1966 },
// //   { label: "Fight Club", year: 1999 },
// //   {
// //     label: "The Lord of the Rings: The Fellowship of the Ring",
// //     year: 2001,
// //   },
// //   {
// //     label: "Star Wars: Episode V - The Empire Strikes Back",
// //     year: 1980,
// //   },
// //   { label: "Forrest Gump", year: 1994 },
// //   { label: "Inception", year: 2010 },
// //   {
// //     label: "The Lord of the Rings: The Two Towers",
// //     year: 2002,
// //   },
// //   { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
// //   { label: "Goodfellas", year: 1990 },
// //   { label: "The Matrix", year: 1999 },
// //   { label: "Seven Samurai", year: 1954 },
// //   {
// //     label: "Star Wars: Episode IV - A New Hope",
// //     year: 1977,
// //   },
// //   { label: "City of God", year: 2002 },
// //   { label: "Se7en", year: 1995 },
// //   { label: "The Silence of the Lambs", year: 1991 },
// //   { label: "It's a Wonderful Life", year: 1946 },
// //   { label: "Life Is Beautiful", year: 1997 },
// //   { label: "The Usual Suspects", year: 1995 },
// //   { label: "Léon: The Professional", year: 1994 },
// //   { label: "Spirited Away", year: 2001 },
// //   { label: "Saving Private Ryan", year: 1998 },
// //   { label: "Once Upon a Time in the West", year: 1968 },
// //   { label: "American History X", year: 1998 },
// //   { label: "Interstellar", year: 2014 },
// //   { label: "Casablanca", year: 1942 },
// //   { label: "City Lights", year: 1931 },
// //   { label: "Psycho", year: 1960 },
// //   { label: "The Green Mile", year: 1999 },
// //   { label: "The Intouchables", year: 2011 },
// //   { label: "Modern Times", year: 1936 },
// //   { label: "Raiders of the Lost Ark", year: 1981 },
// //   { label: "Rear Window", year: 1954 },
// //   { label: "The Pianist", year: 2002 },
// //   { label: "The Departed", year: 2006 },
// //   { label: "Terminator 2: Judgment Day", year: 1991 },
// //   { label: "Back to the Future", year: 1985 },
// //   { label: "Whiplash", year: 2014 },
// //   { label: "Gladiator", year: 2000 },
// //   { label: "Memento", year: 2000 },
// //   { label: "The Prestige", year: 2006 },
// //   { label: "The Lion King", year: 1994 },
// //   { label: "Apocalypse Now", year: 1979 },
// //   { label: "Alien", year: 1979 },
// //   { label: "Sunset Boulevard", year: 1950 },
// //   {
// //     label:
// //       "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
// //     year: 1964,
// //   },
// //   { label: "The Great Dictator", year: 1940 },
// //   { label: "Cinema Paradiso", year: 1988 },
// //   { label: "The Lives of Others", year: 2006 },
// //   { label: "Grave of the Fireflies", year: 1988 },
// //   { label: "Paths of Glory", year: 1957 },
// //   { label: "Django Unchained", year: 2012 },
// //   { label: "The Shining", year: 1980 },
// //   { label: "WALL·E", year: 2008 },
// //   { label: "American Beauty", year: 1999 },
// //   { label: "The Dark Knight Rises", year: 2012 },
// //   { label: "Princess Mononoke", year: 1997 },
// //   { label: "Aliens", year: 1986 },
// //   { label: "Oldboy", year: 2003 },
// //   { label: "Once Upon a Time in America", year: 1984 },
// //   { label: "Witness for the Prosecution", year: 1957 },
// //   { label: "Das Boot", year: 1981 },
// //   { label: "Citizen Kane", year: 1941 },
// //   { label: "North by Northwest", year: 1959 },
// //   { label: "Vertigo", year: 1958 },
// //   {
// //     label: "Star Wars: Episode VI - Return of the Jedi",
// //     year: 1983,
// //   },
// //   { label: "Reservoir Dogs", year: 1992 },
// //   { label: "Braveheart", year: 1995 },
// //   { label: "M", year: 1931 },
// //   { label: "Requiem for a Dream", year: 2000 },
// //   { label: "Amélie", year: 2001 },
// //   { label: "A Clockwork Orange", year: 1971 },
// //   { label: "Like Stars on Earth", year: 2007 },
// //   { label: "Taxi Driver", year: 1976 },
// //   { label: "Lawrence of Arabia", year: 1962 },
// //   { label: "Double Indemnity", year: 1944 },
// //   {
// //     label: "Eternal Sunshine of the Spotless Mind",
// //     year: 2004,
// //   },
// //   { label: "Amadeus", year: 1984 },
// //   { label: "To Kill a Mockingbird", year: 1962 },
// //   { label: "Toy Story 3", year: 2010 },
// //   { label: "Logan", year: 2017 },
// //   { label: "Full Metal Jacket", year: 1987 },
// //   { label: "Dangal", year: 2016 },
// //   { label: "The Sting", year: 1973 },
// //   { label: "2001: A Space Odyssey", year: 1968 },
// //   { label: "Singin' in the Rain", year: 1952 },
// //   { label: "Toy Story", year: 1995 },
// //   { label: "Bicycle Thieves", year: 1948 },
// //   { label: "The Kid", year: 1921 },
// //   { label: "Inglourious Basterds", year: 2009 },
// //   { label: "Snatch", year: 2000 },
// //   { label: "3 Idiots", year: 2009 },
// //   { label: "Monty Python and the Holy Grail", year: 1975 },
// // ];
