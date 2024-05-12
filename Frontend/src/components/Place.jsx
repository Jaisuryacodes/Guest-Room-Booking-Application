export const Places= createContext({});
export function UserContextProvider({children}){
    const [places,setPlaces]=useState([null]);
     return(
        <Places.Provider value={{places,setPlaces}}>
            {children}
        </Places.Provider>
    )
}