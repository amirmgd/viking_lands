import { createContext, useState } from "react"

const FavContext = createContext({
	favorite: [],
	favoriteCount: 0,
})

export function FavoriteContextProvider(props) {
	const [userFav, setUserFav] = useState([])

	function addFavoriteHandler(favoritePlace) {
		setUserFav((prevUserFav) => {
			return prevUserFav.concat(favoritePlace)
		})
	}

	function removeFavoriteHandler(placeId) {
		setUserFav((prevUserFav) => {
			return prevUserFav.filter((place) => place.id !== placeId)
		})
	}

	function itemIsFavoriteHandler(placeId) {
		return userFav.some((place) => place.id === placeId)
	}

	const context = {
		favorite: userFav,
		favoriteCount: userFav.length,
		addFav: addFavoriteHandler,
		removeFav: removeFavoriteHandler,
		itemIsFav: itemIsFavoriteHandler,
	}

	return (
		<FavContext.Provider value={context}>{props.children}</FavContext.Provider>
	)
}

export default FavContext
